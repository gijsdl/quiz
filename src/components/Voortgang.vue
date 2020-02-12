<template>
    <div id="voortgang">
        <div v-for="(vraag) in vragenData.vragen" :key="vraag.id">
            <button @click="naarVraag(vraag.id)" class="nos"
                    v-bind:class="{'vraagNummer': checkVraagNummer(vraag.id), 'geantwoord':  vraag.selected !== 0}">
                {{vraag.id}}
            </button>
        </div>
    </div>
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
    #voortgang {
        display: flex;
        margin: 20px auto;
        padding: 0 20px 0 20px;
        justify-content: space-around;
    }

    .nos {
        width: 50px;
        height: 50px;
        background-color: #8c8c8c;
        border-radius: 50%;
        text-align: center;
        color: white;
        padding: 11px;
        font-weight: bolder;
        font-size: 22px;
        border: 1.5px solid lightskyblue;
    }

    .vraagNummer {
        border: 3px solid orange;
    }

    .geantwoord {
        background-color: green;
    }
</style>