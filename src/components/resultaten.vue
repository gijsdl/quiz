<template>
    <div>
        <b-row>
            <b-col>
                <table class="table table-responsive">
                    <thead>
                    <th>name</th>
                    <th :colspan="span">questions</th>
                    </thead>
                    <tbody>
                    <tr v-for="(persoon, index) in data" :key="index">
                        <router-link :to="'/history/details/' + persoon.id"><td>{{persoon.name}}</td></router-link>
                        <td v-for="(question, index) in persoon.questions" :key="index"
                            v-bind:class="{'bg-success': checkCorrectCollor(question.selected, question.answer),'bg-danger': !checkCorrectCollor(question.selected, question.answer)}">
                            {{question.question}}
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
                    let span = 0;
                    this.data.forEach(function(questionArray){
                        let tempSpan = questionArray.questions.length;

                        if (tempSpan > span){

                            span = tempSpan;
                        }
                    });
                    this.span = span;
                });
        },
        data() {
            return {
                data: null,
                span: 0,
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