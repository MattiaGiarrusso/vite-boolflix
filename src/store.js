import { reactive } from 'vue'

export const store = reactive ({
    apiKey: 'f1dad3b75f0c12373c33e4126f93efd7',
    searchContent: '',
    nofoundMessage: '', 
    moviesList: [],
    seriesList: [],
    moviesApiUrl: 'https://api.themoviedb.org/3/search/movie',
    seriesApiUrl: 'https://api.themoviedb.org/3/search/tv',
    movieImage:'https://image.tmdb.org/t/p/w342/',
})