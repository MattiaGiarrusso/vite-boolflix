<script>
import axios from 'axios';
import { store } from '../store.js';
import AppCardMedia from './AppCardMedia.vue';
import AppCardSerie from './AppCardSerie.vue';

export default {
    name: 'AppMain',
    components: {
        AppCardMedia,
        AppCardSerie
    },
    data() {
        return {
            store,
            image: 'no-found.png'
        }
    },
    methods: {
        getImageUrl(image) {
            return new URL('../assets/img/' + image, import.meta.url).href;
            }
    },
}

</script>

<template>
    <section>
        <div class="ms-container">
            <div v-if="store.nofoundMessage" class="col-6 banner-nofound d-flex flex-column justify-content-center align-items-center">
                <img :src="getImageUrl(image)" alt="">
                <h2>{{ store.nofoundMessage }}</h2>
            </div>
            
            <div v-else class="d-flex flex-wrap ms-padding">
                <AppCardMedia v-for="movie in store.moviesList" :key="movie.id" :selectMedia="movie"></AppCardMedia>
                <AppCardSerie v-for="serie in store.seriesList" :key="serie.id" :selectMedia="serie"></AppCardSerie>
            </div>

        </div>
    </section>
</template>

<style scoped lang="scss">

@use '../style/generic';

section {
    background-color:#2D262D;
    position: relative;

    .banner-nofound {
        margin-top: 100px;
        position: absolute;
        top: 25%;
        left: 25%;
        color: red;

        img {
            width: 40%;
        }
    }
    
    .ms-container {
        height: 100%;
    }

    .ms-padding {
        padding: 70px 0px;
    }

}



</style>