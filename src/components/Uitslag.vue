<template>
    <div>
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
                <tr v-for="(vraag, index) in vragenData" :key="index"
                    v-bind:class="{'bg-success': checkCorrectCollor(vraag.selected, vraag.answer),'bg-danger': !checkCorrectCollor(vraag.selected, vraag.answer)}">
                    <td>{{index + 1}}</td>
                    <td>{{vraag.question}}</td>
                    <td>{{getAntwoord(vraag,vraag.selected)}}</td>
                    <td>{{getAntwoord(vraag,vraag.answer)}}</td>
                    <td>{{checkCorrect(vraag.selected, vraag.answer)}}</td>
                </tr>
                </tbody>
            </table>
        </b-row>
        <b-row>
            <b-col>
                <b-form @submit="onSubmit">
                    <b-form-group>
                        <b-form-input v-model="form.name" required placeholder="Enter name"></b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="primary">Submit</b-button>
                </b-form>
            </b-col>
        </b-row>
    </div>
</template>

<script>

    export default {
        name: "Uitslag",
        data() {
            return {
                form: {
                    name: '',
                    vragen: this.vragenData,
                },
            }
        },
        props: {
            vragenData: null,
        },
        methods: {
            getAntwoord(vraag, optie) {
                switch (optie) {
                    case 1 :
                        return vraag.option1;
                    case 2 :
                        return vraag.option2;
                    case 3 :
                        return vraag.option3;
                    case 4 :
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
            onSubmit(evt) {
                evt.preventDefault();
                console.log(JSON.stringify(this.form));
                // console.log(JSON.stringify(this.vragenData));
                fetch('http://localhost:8000/post/vragen', {
                    body: JSON.stringify(this.form),
                    method: "POST"
                })
                    .then((response) => {
                        return response.json();
                    })
                    .then((myJson) => {
                        console.log(myJson);
                    });
            },
        }
    }
</script>

<style scoped>

</style>