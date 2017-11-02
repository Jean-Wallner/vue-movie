<template>
    <div>
        <div>Category: {{getCatTitle}}</div>
        <div class="movie" v-for="movie in getMovieByCat">
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

<style scoped>
    div.movie {
        background: transparent;
        width: 25%;
        display: inline-block;
        height: 300px;
        text-align: center;
    }

    div.movie img {
        display: inline-block;
        width: 120px;
    }
</style>
