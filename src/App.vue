<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue'; 
import AppSearch from './components/AppSearch.vue';
import AppMain from './components/AppMain.vue';
import AppCardMovie from './components/AppCardMovie.vue';

export default {
  components: {
      AppHeader,
      AppSearch,
      AppMain,
      AppCardMovie
  },
  data () {
      return {
        store,
      };
    },
    methods: {
      searchMovie() {

        const queryParams = {
           api_key: store.apiKey,
           query: store.searchContent,
           language: 'it-IT',
        };

        store.moviesList = [];

        let urlCompleteMovies = store.moviesApiUri;

        axios.get(urlCompleteMovies, {params: queryParams})
          .then ((response) => {            
            store.moviesList = response.data.results;
          })
      },
      mounted() {
        this.searchMovie();
      }    
    }
}
</script>

<template>
  <AppHeader></AppHeader>

  <main>
    <AppSearch @search="searchMovie"></AppSearch>
    <AppMain></AppMain>
  </main>  
</template>

<style lang="scss">

@use './style/generic';

</style>
