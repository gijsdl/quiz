<template>
    <div>
        <b-row>
            <b-col>
                <table class="table">
                    <thead>
                    <th>name</th>
                    <th>question1</th>
                    <th>question2</th>
                    <th>question3</th>
                    <th>question4</th>
                    <th>question5</th>
                    <th>question6</th>
                    </thead>
                    <tbody>
                    <tr v-for="(persoon, index) in data" :key="index">
                        <router-link :to="'/history/details/' + persoon.id"><td>{{persoon.name}}</td></router-link>
                        <td v-bind:class="{'bg-success': checkCorrectCollor(persoon.question1.selected, persoon.question1.answer),
                    'bg-danger': !checkCorrectCollor(persoon.question1.selected, persoon.question1.answer)}">
                            {{persoon.question1.question}}
                        </td>
                        <td v-bind:class="{'bg-success': checkCorrectCollor(persoon.question2.selected, persoon.question2.answer),
                    'bg-danger': !checkCorrectCollor(persoon.question2.selected, persoon.question2.answer)}">
                            {{persoon.question2.question}}
                        </td>
                        <td v-bind:class="{'bg-success': checkCorrectCollor(persoon.question3.selected, persoon.question3.answer),
                    'bg-danger': !checkCorrectCollor(persoon.question3.selected, persoon.question3.answer)}">
                            {{persoon.question3.question}}
                        </td>
                        <td v-bind:class="{'bg-success': checkCorrectCollor(persoon.question4.selected, persoon.question4.answer),
                    'bg-danger': !checkCorrectCollor(persoon.question4.selected, persoon.question4.answer)}">
                            {{persoon.question4.question}}
                        </td>
                        <td v-bind:class="{'bg-success': checkCorrectCollor(persoon.question5.selected, persoon.question5.answer),
                    'bg-danger': !checkCorrectCollor(persoon.question5.selected, persoon.question5.answer)}">
                            {{persoon.question5.question}}
                        </td>
                        <td v-bind:class="{'bg-success': checkCorrectCollor(persoon.question6.selected, persoon.question6.answer),
                    'bg-danger': !checkCorrectCollor(persoon.question6.selected, persoon.question6.answer)}">
                            {{persoon.question6.question}}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </b-col>
        </b-row>
        <b-row class="mt-2">
            <b-col class="text-center">
                <router-link to="/">
                    <b-button pill variant="primary">quiz</b-button>
                </router-link>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: "resultaten",
        beforeCreate() {
            fetch('http://localhost:8000/history')
                .then((response) => {
                    return response.json();
                })
                .then((myJson) => {
                    this.data = myJson;
                });
        },
        data() {
            return {
                data: null
            }
        },
        methods: {
            checkCorrectCollor(antwoord, userAntwoord) {
                return antwoord === userAntwoord;
            },
        }
    }
</script>

<style scoped>

</style>