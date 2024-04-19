<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue'; 
import AppMain from './components/AppMain.vue';
import AppCardMedia from './components/AppCardMedia.vue';
import AppCardSerie from './components/AppCardSerie.vue';

export default {
  components: {
      AppHeader,
      AppMain,
      AppCardMedia,
      AppCardSerie
  },
  data () {
      return {
        store,
      };
    },
    methods: {
      searchMedia() {

        const queryParams = {
           api_key: store.apiKey,
           query: store.searchContent,
           language: 'it-IT',
        };

        store.moviesList = [];
        store.seriesList = [];
        store.nofoundMessage = '';

        let urlCompleteMovies = store.moviesApiUrl;

        axios.get(urlCompleteMovies, {params: queryParams})
          .then ((response) => {            
            if (response.data.results.length === 0) {
              store.nofoundMessage = "Nessun film o serie tv trovata"
            } else {
              store.moviesList = response.data.results;
            }
          });

        let urlCompleteSeries = store.seriesApiUrl;

        axios.get(urlCompleteSeries, {params: queryParams})
          .then ((response) => {            
            if (response.data.results.length === 0) {
              store.nofoundMessage = "Nessun film o serie tv trovata"
            } else {
              store.seriesList = response.data.results;
            }
          })
          
      },
      mounted() {
        this.searchMedia();
      }    
    }
}
</script>

<template>
  <AppHeader @search="searchMedia"></AppHeader>

  <main>
    <AppMain></AppMain>
  </main>  
</template>

<style lang="scss">

@use './style/generic';

main {
  height: 100vh;
  background-color: #2D262D;
}

</style>
