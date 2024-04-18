<script>
   import { store } from '../store.js';
   
   export default {
    name: 'AppCardMedia',
    props: {
        selectMedia: Object,
    },
    data () {
        return {
            store,
            flag: this.selectMedia.original_language,
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

    <div class="card ms-card my-2 ms-border" style="width: calc(100% / 4);">
        <div class="ms-card-image bg-dark">
            <img :src="store.movieImage + selectMedia.poster_path" :alt="selectMedia.title">
        </div>
        <div class="card-body bg-dark text-light d-flex flex-column">
            <h5 class="card-title pb-1"><strong>{{ selectMedia.title }}</strong></h5>
            <span class="card-text pb-1"><strong>Titolo originale: </strong>{{ selectMedia.original_title }}</span>
            <span class="card-text pb-1">
                <strong>Voto:</strong>
                <i v-for="n in 5" :key="n" class="fa-star" :class="{ 'fa-solid': n <= Math.round(selectMedia.vote_average / 2), 'fa-regular': n > Math.round(selectMedia.vote_average / 2) }"></i>
            </span>
            <span class="card-text pb-1"><strong>Lingua: </strong><img class="ms-flag" :src="getFlagUrl(flag)" alt=""></span>
            <p class="card-text"><strong>Descrizione: </strong>{{ selectMedia.overview }}</p>
        </div>
    </div>
 
</template>

<style scoped lang="scss">

@use '../style/generic';

.card {
    font-size: 12px;
    font-family: "Instrument Sans", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-variation-settings: "wdth" 100;    
}

.ms-card-image {
    height: 50%;
    img {
        height: 100%;
    }
} 

.ms-border {
    border-radius: 0px;
    border: 1px solid black;
}

.ms-flag {
    width: 20px;    
}

.fa-star {
    color: white
}

</style>