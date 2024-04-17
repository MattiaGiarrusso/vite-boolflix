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
        <img :src="store.movieImage + selectMovie.poster_path" :alt="selectMovie.title">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title "><strong>{{ selectMovie.title }}</strong></h5>
            <span class="card-text"><strong>{{ selectMovie.original_title }}</strong></span>
        </div>
    </div>
 
</template>

<style scoped lang="scss">

@use '../style/generic';

img {
    border-radius: 10px;
}

</style>