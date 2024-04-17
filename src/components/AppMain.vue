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
        <div class="container d-flex flex-wrap">
            <AppCardMovie v-for="movie in store.moviesList" :key="movie.id" :selectMovie="movie"></AppCardMovie>
        </div>
    </section>
</template>

<style scoped lang="scss">

@use '../style/generic';

section {
    background-color:#2D262D;
}



</style>