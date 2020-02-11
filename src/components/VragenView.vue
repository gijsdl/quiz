<template>
    <div id="vragen">
        <div id="vraag">{{vraag.question}}</div>
        <button id="btn1" @click="selectAntwoord" class="button"><span id="option1">{{vraag.option1}}</span></button>
        <button id="btn2" class="button"><span id="option2">{{vraag.option2}}</span></button>
        <button id="btn3" class="button"><span id="option3">{{vraag.option3}}</span></button>
        <button id="btn4" class="button"><span id="option4">{{vraag.option4}}</span></button>
    </div>
</template>

<script>
    import vragenData from "../data/Vragen";

    export default {
        name: "vragen",
        data() {
            return {
                vragenData,
            }
        },
        props: {
            vraagNummer: {
                type: Number,
            }
        },
        computed: {
            vraag() {
                return {
                    ...this.vragenData.vragen[this.vraagNummer]
                }
            }
        },
        methods: {
            selectAntwoord(option){
                this.vragenData.vragen[this.vraagNummer].selected = option;
            }
        }
    }
</script>

<style scoped>
    #vragen {
        grid-row: 1 / 3;
        grid-column: 1 / 5;
        display: grid;
        grid-template-columns: 33.3% 33.3% 33.3%;
        grid-template-rows: 80px 50px 50px;

    }

    #vraag {
        grid-row: 1;
        grid-column: 1 / 5;
        justify-self: start;
        font-size: 35px;
        font-weight: bold;

    }

    #btn1 {
        grid-row: 2;
        grid-column: 1 / 3;
    }

    #btn2 {
        grid-row: 2;
        grid-column: 2 / 4;
    }

    #btn3 {
        grid-row: 3;
        grid-column: 1 / 3;
    }

    #btn4 {
        grid-row: 3;
        grid-column: 2 / 4;
    }

    .button {
        justify-self: center;
        background-color: #e6f3ff;
        width: 250px;
        height: auto;
        border: 1.5px solid #339cff;
        border-radius: 75px;
        margin: 10px;
    }

    .button span {
        text-align: center;
        font-size: 20px;
        padding: 10px;
        font-weight: bold;
        color: #001a33;
    }

    .button:hover {
        background-color: #99ceff;
        cursor: pointer;
    }
</style>