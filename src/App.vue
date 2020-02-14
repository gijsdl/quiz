<template>
    <div id="app">
        <div class="quiz">
            <header>
                <h1 class="bg-info text-center p-4 rounded mt-2">HTML quiz</h1>
            </header>
<!--            {{vragenData}}-->
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
            </b-container>
        </div>
    </div>
</template>

<script>
    import Voortgang from "./components/Voortgang";
    import VragenView from "./components/VragenView";

    import Uitslag from "./components/Uitslag";

    export default {

        name: 'App',
        components: {
            Uitslag,
            VragenView,
            Voortgang,
        },
        beforeCreate() {
            fetch('http://localhost:8000/vragen')
                .then((response)=> {
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
                    this.vragenData.forEach(vraag => {
                        vraag.selected = 0;
                    });
                    this.vraagNummer = 0;
                }
            },
        },
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        -ms-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        /* To make sure users don't copy text from the quiz */
        -ms-user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        outline: none;
    }

    .quiz {
        background-color: white;
        height: auto;
        width: 900px;
        margin: 30px auto;
        border-radius: 40px;
        box-shadow: 5px 7px 5px 5px rgba(0, 26, 51, 0.5);
        padding: 2px 50px 50px 50px;
    }


    html {
        background-color: #e6e6e6;
    }
</style>
