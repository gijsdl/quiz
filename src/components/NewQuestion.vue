<template>
    <b-row>
        <b-col>
            <b-form @submit="onSubmit">
                <b-form-group>
                    <b-form-group
                            id="question"
                            label="question"
                            label-for="question"
                    >
                        <b-form-input
                                id="question"
                                v-model="form.question"
                                type="text"
                                required
                                placeholder="Enter question"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group
                            id="options"
                            label="options"
                            label-for="options"
                    >
                    <b-form-input v-model="form.option1" required placeholder="option 1"></b-form-input><br>
                    <b-form-input v-model="form.option2" required placeholder="option 2"></b-form-input><br>
                    <b-form-input v-model="form.option3" required placeholder="option 3"></b-form-input><br>
                    <b-form-input v-model="form.option4" required placeholder="option 4"></b-form-input>
                    </b-form-group>
                </b-form-group>
                <b-form-group
                        id="answer"
                        label="answer"
                        label-for="answer"
                >
                    <b-form-select v-model="form.answer" required>
                        <b-form-select-option  v-for="i in 4" :key="i" :value="i">{{i}}</b-form-select-option>
                    </b-form-select>
                </b-form-group>
                <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: "NewQuestion",
        data(){
            return{
                form:{
                    question: null,
                    option1: null,
                    option2: null,
                    option3: null,
                    option4: null,
                    answer: null,
                },
            }
        },
        methods:{
            onSubmit(evt){
                evt.preventDefault();
                fetch('http://localhost:8000/add-question', {
                    body: JSON.stringify(this.form),
                    method: "POST"
                })
                    .then((response) => {
                        return response.json();
                    })
                    .then((myJson) => {
                        console.log(myJson);
                    });
                this.$router.push("/questions")
            }
        }
    }
</script>

<style scoped>

</style>