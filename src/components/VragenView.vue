<template>
    <div>
        <b-row>
            <b-col>
                <h2>{{vraag.question}}</h2>
            </b-col>
        </b-row>
        <b-row class="text-center mt-3">
            <b-col>
                <b-button pill variant="outline-primary" @click="selectAntwoord(1)"
                        v-bind:class="{'active': vraag.selected === 1 }"><span
                        id="option1">{{vraag.option1}}</span>
                </b-button>
            </b-col>
            <b-col>
                <b-button pill variant="outline-primary" @click="selectAntwoord(2)"
                          v-bind:class="{'active': vraag.selected === 2 }"><span
                        id="option2">{{vraag.option2}}</span>
                </b-button>
            </b-col>
        </b-row>
        <b-row class="text-center mt-3">
            <b-col>
                <b-button pill variant="outline-primary" @click="selectAntwoord(3)"
                          v-bind:class="{'active': vraag.selected === 3 }"><span
                        id="option3">{{vraag.option3}}</span>
                </b-button>
            </b-col>
            <b-col>
                <b-button pill variant="outline-primary" @click="selectAntwoord(4)"
                          v-bind:class="{'active': vraag.selected === 4}"><span
                        id="option4">{{vraag.option4}}</span>
                </b-button>
            </b-col>
        </b-row>
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
            },

        },
        methods: {
            selectAntwoord(option) {
                this.vragenData.vragen[this.vraagNummer].selected = option;
            },
        }
    }
</script>

<style scoped>

</style>