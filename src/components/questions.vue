<template>
    <b-row>
        <b-col>
            <table class="table table-responsive">
                <thead>
                <th>question</th>
                <th>option1</th>
                <th>option2</th>
                <th>option3</th>
                <th>option4</th>
                <th>answer</th>
                </thead>
                <tbody>
                <tr v-for="(vraag, index) in data" :key="index">
                    <td>{{vraag.question}}</td>
                    <td>{{vraag.option1}}</td>
                    <td>{{vraag.option2}}</td>
                    <td>{{vraag.option3}}</td>
                    <td>{{vraag.option4}}</td>
                    <td>{{vraag.answer}}</td>
                </tr>
                </tbody>
            </table>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: "questions",
        beforeCreate() {
            fetch('http://localhost:8000/all-questions')
                .then((response) => {
                    return response.json();
                })
                .then((myJson) => {
                    this.data = myJson;
                });
        },
        data(){
            return{
                data: null,
            }
        },
    }

</script>

<style scoped>

</style>