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
            <input type="text" class="form-control" placeholder="Cerca un film o una serie TV..." v-model="store.searchContent" @keyup.enter="$emit('search')">
            <button class="btn ms-btn-search" type="button" @click="$emit('search')">Cerca</button>
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

    .logo {        
        height: 60px;

        img {
            height: 100%;
        }
    }

    .ms-input-group {
        width: 40%;

        .ms-btn-search {
            background-color: red;
            &:hover {
                background-color: darkred;
            }
        }
    }

}

</style>