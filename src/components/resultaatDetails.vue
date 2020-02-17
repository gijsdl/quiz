<template>
    <div>
        <b-row>
            <b-col>
                <h2>name: {{data.name}}</h2>
            </b-col>
            <b-col class="text-right">
                <router-link to="/history">
                    <b-button pill variant="primary">back</b-button>
                </router-link>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <table class="table">
                    <thead>
                    <th>nummer</th>
                    <th>vraag</th>
                    <th>{{data.name}} antwoord</th>
                    <th>juiste antwoord</th>
                    <th>oordeel</th>
                    </thead>
                    <tbody>
                    <tr v-for="(question, index) in questions" :key="index"
                        v-bind:class="{'bg-success': checkCorrectCollor(question.selected, question.answer),'bg-danger': !checkCorrectCollor(question.selected, question.answer)}">
                        <td>{{index + 1}}</td>
                        <td>{{question.question}}</td>
                        <td>{{getAntwoord(question,question.selected)}}</td>
                        <td>{{getAntwoord(question,question.answer)}}</td>
                        <td>{{checkCorrect(question.selected, question.answer)}}</td>
                    </tr>
                    </tbody>
                </table>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: "resultaatDetails",
        beforeCreate() {
            fetch('http://localhost:8000/history-details/' + this.$route.params.id)
                .then((response) => {
                    return response.json();
                })
                .then((myJson) => {
                    this.data = myJson;
                    this.questions = this.data.questions
                });

        },
        data() {
            return {
                data: null,
                questions: null,
            }
        },
        methods: {
            getAntwoord(question, optie) {
                switch (optie) {
                    case 1 :
                        return question.option1;
                    case 2 :
                        return question.option2;
                    case 3 :
                        return question.option3;
                    case 4 :
                        return question.option4;
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