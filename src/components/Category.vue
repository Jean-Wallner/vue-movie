
<template>
    <div>
        <div class="container movies">
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-3" v-for="movie in getMovieByCat">
                    <router-link :to="{ name: 'movie', params: { id: movie.imdb_id }}">
                        <div class="movie">
                            <img src="http://imgc.allpostersimages.com/img/posters/star-wars-the-force-awakens-one-sheet_u-L-F8G58H0.jpg"/>
                            <p>{{movie.title}}</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import movies from '../data/movies.json';

    export default {
        data: function () {
            return {
                movies: movies
            }
        },
        computed: {
            getCatTitle: function () {
                let cat = this.$route.params.id;
                return cat.charAt(0).toUpperCase() + cat.slice(1);
            },
            getMovieByCat: function () {
                let genre = this.$route.params.id,
                    results = [],
                    current = {};

                this.movies.map(function(movie, key) {
                    movie.genres.map(function(value, key) {
                        if(genre === value.toLowerCase()){
                            results.push(movie)
                        }
                     });
                 });
                return results
            }
        }
    }
</script>

<style>

</style>
