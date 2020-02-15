<template>
    <div>
        <Voortgang :vraag-id="vraagNummer" :vragen="vragenData" @naarVraag="naarVraag($event)"/>
        <hr class="border">
        <b-container>
            <uitslag v-if="isIngeleverd" :vragen-data="vragenData"/>
            <vragen-view v-if="!isIngeleverd" :vraag-nummer="vraagNummer" :vragen-data="vragenData"/>
            <b-row class="mt-3">
                <b-col class="text-center">
                    <b-button pill variant="primary" v-if="(selectedVraag > 0 && !isIngeleverd)"
                              @click="volgendeVraag(-1)">Vorige Vraag
                    </b-button>
                </b-col>
                <b-col class="text-center">
                    <b-button pill variant="primary" @click="inleveren" v-if="allesBeantwoord">{{inleverText}}
                    </b-button>
                </b-col>
                <b-col class="text-center">
                    <b-button pill variant="primary" v-if="(selectedVraag < (vragenData.length - 1) && !isIngeleverd)"
                              @click="volgendeVraag(1)">Volgende Vraag
                    </b-button>
                </b-col>
            </b-row>
            <b-row class="mt-2">
                <b-col class="text-center">
                    <router-link to="/history">
                        <b-button pill variant="primary">history</b-button>
                    </router-link>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Voortgang from "./Voortgang";
    import VragenView from "./VragenView";

    import Uitslag from "./Uitslag";

    export default {
        name: "quiz",
        components: {
            Uitslag,
            VragenView,
            Voortgang,
        },
        beforeCreate() {
            fetch('http://localhost:8000/vragen')
                .then((response) => {
                    return response.json();
                })
                .then((myJson) => {
                    this.vragenData = myJson;
                });
        },
        data() {
            return {
                vragenData: null,
                vraagNummer: 0,
                ingeleverd: false,
                inleverText: "Inleveren",
            }
        },
        computed: {
            selectedVraag() {
                return this.vraagNummer;
            },
            allesBeantwoord() {
                let isBeantwoord = true;
                this.vragenData.forEach(vraag => {
                    if (vraag.selected === null) {
                        isBeantwoord = false;
                    }
                });
                return isBeantwoord;
            },
            isIngeleverd() {
                return this.ingeleverd;
            },
        },
        methods: {
            volgendeVraag(nummer) {
                this.vraagNummer += nummer;
                if (this.vraagNummer < 0 || this.vraagNummer >= this.vragenData.length) {
                    this.vraagNummer -= nummer;
                }
            },
            naarVraag(vraagNummer) {
                this.vraagNummer = vraagNummer;
            },
            inleveren() {
                this.ingeleverd = !this.ingeleverd;
                if (this.ingeleverd) {
                    this.inleverText = "Opnieuw";
                } else {
                    this.inleverText = "Inleveren";
                    this.reset()
                }
            },
            reset() {
                this.vragenData.forEach(vraag => {
                    vraag.selected = null;
                });
                this.vraagNummer = 0;
                fetch('http://localhost:8000/vragen')
                    .then((response) => {
                        return response.json();
                    })
                    .then((myJson) => {
                        this.vragenData = myJson;
                    });
            },
        },
    }
</script>

<style scoped>

</style>