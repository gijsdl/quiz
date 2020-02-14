<template>
    <b-row class="mt-4">
        <b-col class="text-center" v-for="(vraag) in vragen" :key="vraag.id">
            <b-button pill variant="outline-primary" @click="naarVraag(vraag.id)"
                    v-bind:class="{'active': checkVraagNummer(vraag.id), 'btn-outline-success':  vraag.selected !== null}">
                {{vraag.id}}
            </b-button>
        </b-col>
    </b-row>
</template>

<script>

    export default {
        name: "Voortgang",
        props: {
            vraagId: {
                type: Number,
            },
            vragen: null,
        },
        methods: {
            checkVraagNummer(nummer) {
                // console.log(this.vragen);
                return this.vragen[this.vraagId].id === nummer;
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