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
            store
        }
    }
}

</script>

<template>
    <section>
        <div class="ms-container">

            <div class="container d-flex flex-wrap ms-padding">
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
    
    .ms-container {
        height: 100%;
    }

    .ms-padding {
        padding: 70px 0px;
    }

}



</style>