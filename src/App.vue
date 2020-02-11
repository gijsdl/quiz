<template>
    <div id="app">
        <div class="quiz">
            <header>
                <h1>HTML quiz</h1>
            </header>
            <voortgang :vraag-id="vraagNummer"/>
            <hr>
            <div id="content">
                <vragen-view :vraag-nummer="vraagNummer"/>
                <button id="volgende" @click="volgendeVraag(1)" class="navigatie">Volgende Vraag</button>
                <button id="inleveren" class="navigatie">Inleveren</button>
                <button id="vorige" @click="volgendeVraag(-1)" class="navigatie">Vorige Vraag</button>
            </div>
        </div>
    </div>
</template>

<script>
    import voortgang from "./components/voortgang";
    import VragenView from "./components/VragenView";
    import vragenData from "./data/Vragen";

    export default {

        name: 'App',
        components: {
            VragenView,
            voortgang,
        },
        data() {
            return {
                vragenData,
                vraagNummer: 0,
            }
        },
        computed: {
            selectedVraag() {
                return {
                    ...this.vragenData.vragen[this.vraagNummer]
                }
            },
        },
        methods:{
            volgendeVraag(nummer){
              this.vraagNummer += nummer;
              if(this.vraagNummer < 0 || this.vraagNummer >= vragenData.vragen.length){
                  this.vraagNummer -= nummer;
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

    header > h1 {
        text-align: center;
        font-size: 60px;
        background-color: lightskyblue;
        color: #001a33;
        border-radius: 40px;
        margin: 20px 10px 20px 10px;
        padding: 2px 0px;
    }

    hr {
        border: 2px solid #8c8c8c;
    }

    #content {
        margin-top: 20px;
        padding-left: 20px;
        display: grid;
        grid-template-columns: 33.3% 33.3% 33.3%;
        grid-template-rows: 80px 50px 50px 100px;
    }

    #volgende {
        grid-row: 4;
        grid-column: 3;
        justify-self: center;
    }

    #vorige {
        grid-row: 4;
        grid-column: 1;
        justify-self: center;
    }

    #inleveren {
        grid-row: 4;
        grid-column: 2;
        justify-self: center;
    }

    .navigatie {
        background-color: #595959;
        color: white;
        width: 230px;
        padding: 7px;
        border-radius: 50px;
        font-size: 28px;
        font-weight: 900;
        font-family: serif;
        margin: 25px 0px 25px 10px;
        border: 1px solid grey;
        text-align: center;
        box-shadow: 2px 2px 0px 0px rgba(191, 191, 191, 0.5);
    }

    .button span {
        text-align: center;
        font-size: 20px;
        padding: 10px;
        font-weight: bold;
        color: #001a33;
    }


    #vorige:hover {
        cursor: pointer;
        background-color: #808080;
    }

    #volgende:hover {
        cursor: pointer;
        background-color: #808080;
    }

    #inleveren:hover {
        cursor: pointer;
        background-color: #808080;
    }


    html {
        background-color: #e6e6e6;
    }
</style>
