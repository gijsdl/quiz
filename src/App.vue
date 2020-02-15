<template>
    <div id="app">
        <div class="quiz">
            <header>
                <h1 class="bg-info text-center p-4 rounded mt-2">HTML quiz</h1>
            </header>
            <!--            {{vragenData}}-->
            <router-view/>
        </div>
    </div>
</template>

<script>
    export default {

        name: 'App',
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        -ms-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        /* To make sure users don't copy text from the quiz */
        -ms-user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        outline: none;
    }

    .quiz {
        background-color: white;
        height: auto;
        width: 900px;
        margin: 30px auto;
        border-radius: 40px;
        box-shadow: 5px 7px 5px 5px rgba(0, 26, 51, 0.5);
        padding: 2px 50px 50px 50px;
    }


    html {
        background-color: #e6e6e6;
    }
</style>
