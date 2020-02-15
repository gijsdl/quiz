<template>
    <b-row class="mt-4">
        <b-col class="text-center" v-for="(vraag, index) in vragen" :key="index">
            <b-button pill variant="outline-primary" @click="naarVraag(index)"
                    v-bind:class="{'active': checkVraagNummer(index), 'btn-outline-success':  vraag.selected !== null}">
                {{index+1}}
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
                return this.vraagId === nummer;
            },
            naarVraag(vraagNummer) {
                this.$emit('naarVraag', (vraagNummer))
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