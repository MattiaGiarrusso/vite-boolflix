<script>
import { store } from '../store.js'

export default {
    name: 'AppHeader',
    data () {
        return {
            store,
            logo: 'boolflix-logo.png'
            }
        },
    methods: {
        getImageUrl(logo) {
            return new URL('../assets/img/' + logo, import.meta.url).href;
            }
        },
}

</script>

<template>
    <header class="d-flex align-items-center justify-content-between px-4">

        <div class="logo">
            <img :src="getImageUrl(logo)" alt="">
        </div>
        

        <div class="input-group d-flex align-items-center ms-input-group">
            <input type="text" class="form-control bg-dark text-light" placeholder="Cerca un film o una serie TV..." v-model="store.searchContent" @keyup.enter="$emit('search')">
            <button class="btn ms-btn-search" type="button" @click="$emit('search')"><i class="fa-search fa-solid"></i></button>
        </div>

    </header>
</template>

<style scoped lang="scss">

@use '../style/generic';

header {
    width: 100%;
    height: 70px;
    background-color: black;
    color: red;
    position: fixed;
    z-index: 10;
    opacity: 0.9;
    font-size: 12px;
    font-family: "Instrument Sans", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-variation-settings: "wdth" 100;

    .logo {        
        img {
           height: 40px;
        }
    }

    .ms-input-group {
        width: 40%;
        
        input {
            height: 30px;
            border-color: #2D262D;

            &:focus {
                outline: none !important;
                border: 1px solid red;
                box-shadow: none;
            }
            
            &::placeholder {
              color: gray;
              opacity: 1;
            }
        }        

        .ms-btn-search {
            padding: 3px 16px;
            border: none;
            color: gray;
            background-color: #2D262D;
            &:hover {
                background-color: red;
                color: #DEE2E6;
            }
            &:active {
                background-color: red;
                color: #DEE2E6;
            }
        }
    }

}

</style>