<script>
import axios from 'axios';
import { store } from '../store.js';
import AppCardMovie from './AppCardMovie.vue';

export default {
    name: 'AppMain',
    components: {
        AppCardMovie,
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
                <AppCardMovie v-for="movie in store.moviesList" :key="movie.id" :selectMovie="movie"></AppCardMovie>
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
        padding: 90px 0px;
    }

}



</style>