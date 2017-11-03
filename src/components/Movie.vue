<template>
    <div>
        <div>Movie: {{movie.title}}</div>
        Rating: {{movie.rating}}<br/>
        Genres:
        <ul>
            <li v-for="genre in movie.genres">{{genre}}</li>
        </ul>
        Directors:
        <ul>
            <li v-for="director in movie.directors">{{director}}</li>
        </ul>
        Actors:
        <ul>
            <li v-for="actor in movie.actors">{{actor}}</li>
        </ul>
        Plot: {{movie.plot_simple}}<br/>
        Year: {{movie.year}}<br/>
        Runtime:
        <ul>
            <li v-for="runtime in movie.runtime">{{runtime}}</li>
        </ul>
        Alson known as:
        <ul>
            <li v-for="also_known_as in movie.also_known_as">{{also_known_as}}</li>
        </ul>
    </div>
</template>

<script>
    import movies from '../data/movies.json';

    export default {
        data: function () {
            return {
                movie: {},
                movies: movies
            }
        },
        mounted: function () {
            const movieID = this.$route.params.id;
            const _this = this;
            this.movies.map(function(value, key) {
                if(value.imdb_id === movieID){
                    _this.movie = value
                }
            });
        }
    }
</script>

<style>
    
</style>
