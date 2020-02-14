<template>
    <div id="app">
        <div class="quiz">
            <header>
                <h1 class="bg-info text-center p-4 rounded mt-2">HTML quiz</h1>
            </header>
            <Voortgang :vraag-id="vraagNummer" @naarVraag="naarVraag($event)"/>
            <hr class="border">
            <b-container>
                <uitslag v-if="isIngeleverd"/>
                <vragen-view v-if="!isIngeleverd" :vraag-nummer="vraagNummer"/>
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
                        <b-button pill variant="primary" v-if="(selectedVraag < 9 && !isIngeleverd)"
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
    import vragenData from "./data/Vragen";
    import Uitslag from "./components/Uitslag";

    export default {

        name: 'App',
        components: {
            Uitslag,
            VragenView,
            Voortgang,
        },
        data() {
            return {
                vragenData,
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
                this.vragenData.vragen.forEach(vraag => {
                    if (vraag.selected === 0) {
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
                this.getGet();
                this.vraagNummer += nummer;
                if (this.vraagNummer < 0 || this.vraagNummer >= vragenData.vragen.length) {
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
                    this.vragenData.vragen.forEach(vraag => {
                        vraag.selected = 0;
                    });
                    this.vraagNummer = 0;
                }
            },
            getGet() {
                const axios = require('axios');

// Make a request for a user with a given ID
                axios
                    .get('http://localhost:8000/news')
                    .then(response => (console.log(response.data)))
            }
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
