<template>
    <div id="voortgang">
        <div v-for="(vraag) in vragenData.vragen" :key="vraag.id">
            <button class="nos" v-if="checkVraagNummer(vraag.id)" style="border: 3px solid orange;">
                {{vraag.id}}
            </button>
            <button class="nos" v-else>
                {{vraag.id}}
            </button>
        </div>
    </div>
</template>

<script>
    import vragenData from "../data/Vragen";
    export default {
        name: "voortgang",
        data(){
            return{
                vragenData,
            }
        },
        props: {
            vraagId: {
                type: Number,
            },
            vragen:{
                type: JSON,
            },
        },
        methods: {
            checkVraagNummer(nummer){
                if(this.vragenData.vragen[this.vraagId].id === nummer){
                    return true
                }else{
                    return false
                }
            },
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
</style>