<script>
   import { store } from '../store.js';
   
   export default {
    name: 'AppCardMovie',
    props: {
        selectMovie: Object,
    },
    data () {
        return {
            store,
            flag: this.selectMovie.original_language,
        }
    },
    methods: {
        getFlagUrl(flag) {
            return new URL('../assets/img/' + flag + '.png', import.meta.url).href;
            }
    }    
   }
</script>

<template>

    <div class="card my-2 ms-border" style="width: calc(100% / 4);">
        <div class="card-image bg-dark">
            <img :src="store.movieImage + selectMovie.poster_path" :alt="selectMovie.title">
        </div>
        <div class="card-body bg-dark text-light d-flex flex-column">
            <h5 class="card-title"><strong>Titolo: </strong>{{ selectMovie.title }}</h5>
            <span class="card-text"><strong>Titolo originale: </strong>{{ selectMovie.original_title }}</span>
            <span class="card-text"><strong>Voto: </strong>{{ selectMovie.vote_average }}</span>
            <span class="card-text"><strong>Lingua: </strong><img class="ms-flag" :src="getFlagUrl(flag)" alt=""></span>
            <p class="card-text"><strong>Descrizione: </strong>{{ selectMovie.overview }}</p>
        </div>
    </div>
 
</template>

<style scoped lang="scss">

@use '../style/generic';

.ms-border {
    border-radius: 5px;
    border: 1px solid black;
}

.card-image {
    border-radius: 2px solid black;
}

img {
    border-radius: 5px;
}

.ms-flag {
    width: 20px;    
}

</style>