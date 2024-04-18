<script>
   import { store } from '../store.js';
   
   export default {
    name: 'AppCardMovie',
    props: {
        selectMovie: Object
    },
    data () {
        return {
            store
        }
    }
    
   }
</script>

<template>

    <div class="card my-2" style="width: calc(100% / 4);">
        <div>
            <img :src="store.movieImage + selectMovie.poster_path" :alt="selectMovie.title">
        </div>
        <div class="card-body d-flex flex-column">
            <h5 class="card-title "><strong>Titolo: </strong>{{ selectMovie.title }}</h5>
            <span class="card-text"><strong>Titolo originale: </strong>{{ selectMovie.original_title }}</span>
            <span class="card-text"><strong>Lingua: </strong>{{ selectMovie.vote_average }}</span>
            <span class="card-text"><strong>Lingua: </strong>{{ selectMovie.original_language }}</span>
            <p class="card-text"><strong>Descrizione: </strong>{{ selectMovie.overview }}</p>
        </div>
    </div>
 
</template>

<style scoped lang="scss">

@use '../style/generic';

img {
    border-radius: 5px;
}

</style>