<template>
    <div id="voortgang">
        <table>
            <thead>
            <tr>
                <th>nummer</th>
                <th>vraag</th>
                <th>jouw antwoord</th>
                <th>juiste antwoord</th>
                <th>oordeel</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="vraag in vragenData.vragen" :key="vraag.id"
                v-bind:class="{'correct': checkCorrectCollor(vraag.selected, vraag.answer),'incorrect': !checkCorrectCollor(vraag.selected, vraag.answer)}">
                <td>{{vraag.id}}</td>
                <td>{{vraag.question}}</td>
                <td>{{getAntwoord(vraag,vraag.selected)}}</td>
                <td>{{getAntwoord(vraag,vraag.answer)}}</td>
                <td>{{checkCorrect(vraag.selected, vraag.answer)}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import vragenData from "../data/Vragen";

    export default {
        name: "Uitslag",
        data() {
            return {
                vragenData
            }
        },
        methods: {
            getAntwoord(vraag, optie) {
                console.log(optie)
                switch (optie) {
                    case 1 :
                        console.log(1);
                        return vraag.option1;
                    case 2 :
                        console.log(2);
                        return vraag.option2;
                    case 3 :
                        console.log(3);
                        return vraag.option3;
                    case 4 :
                        console.log(4);
                        return vraag.option4;
                    default:
                        return null;
                }
            },
            checkCorrect(antwoord, userAntwoord) {
                if (antwoord === userAntwoord) {
                    return "goed"
                } else {
                    return "fout"
                }
            },
            checkCorrectCollor(antwoord, userAntwoord) {
                return antwoord === userAntwoord;
            },
        }
    }
</script>

<style scoped>
    #voortgang {
        grid-row: 1 / 3;
        grid-column: 1 / 5;
        margin: 20px auto;
        padding: 0 20px 0 20px;
        justify-content: space-around;
    }

    table {
        width: 100%;
        border: 1px solid black;
    }

    td, th {
        border: 1px solid black;
    }

    .correct {
        background-color: green;
    }

    .incorrect {
        background-color: red;
    }
</style>