<template>
    <b-row>
        <table class="table">
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
                v-bind:class="{'bg-success': checkCorrectCollor(vraag.selected, vraag.answer),'bg-danger': !checkCorrectCollor(vraag.selected, vraag.answer)}">
                <td>{{vraag.id}}</td>
                <td>{{vraag.question}}</td>
                <td>{{getAntwoord(vraag,vraag.selected)}}</td>
                <td>{{getAntwoord(vraag,vraag.answer)}}</td>
                <td>{{checkCorrect(vraag.selected, vraag.answer)}}</td>
            </tr>
            </tbody>
        </table>
    </b-row>
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

</style>