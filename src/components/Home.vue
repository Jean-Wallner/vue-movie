<template>
    <div>
        <div>Top 10</div>
        <div class="movie" v-for="movie in movies">
            <router-link :to="{ name: 'movie', params: { id: movie.imdb_id }}">
                <img src="http://imgc.allpostersimages.com/img/posters/star-wars-the-force-awakens-one-sheet_u-L-F8G58H0.jpg"/>
                <br/>
                {{movie.title}}
            </router-link>
        </div>

    </div>
</template>

<script>
    import movies from '../data/movies.json';

    export default {
        data: function () {
            return {
                movies: []
            }
        },
        mounted: function () {
            let topMovies = [];
            movies.map(function(value, key) {
                if(value.rating > 8.5){
                    topMovies.push(value);
                }
            });
            topMovies.splice(0,10);
            this.movies = topMovies;
        }
    }
</script>

<style>

</style>
