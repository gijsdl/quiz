<template>
    <b-row class="mt-4">
        <b-col class="text-center" v-for="(vraag) in vragenData.vragen" :key="vraag.id">
            <b-button pill variant="outline-primary" @click="naarVraag(vraag.id)"
                    v-bind:class="{'active': checkVraagNummer(vraag.id), 'btn-outline-success':  vraag.selected !== 0}">
                {{vraag.id}}
            </b-button>
        </b-col>
    </b-row>
</template>

<script>
    import vragenData from "../data/Vragen";

    export default {
        name: "Voortgang",
        data() {
            return {
                vragenData,
            }
        },
        props: {
            vraagId: {
                type: Number,
            },
            vragen: {
                type: JSON,
            },
        },
        methods: {
            checkVraagNummer(nummer) {
                return this.vragenData.vragen[this.vraagId].id === nummer;
            },
            naarVraag(vraagNummer) {
                this.$emit('naarVraag', (vraagNummer - 1))
            }
        },
    }
</script>

<style scoped>

    .vraagNummer {
        border: 3px solid orange;
    }

    .geantwoord {
        background-color: green;
    }
</style>