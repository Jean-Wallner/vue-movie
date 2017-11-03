<template>
    <div>
        <div class="container movies">
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-3" v-for="movie in movies">
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

<style lang="scss">

div.movies {
    div.movie {
        background: white;
        padding: 15px;
        text-align: center;
        margin-bottom: 15px;

        img {
            width: 100%;
            border-radius: 10px;
            margin-bottom: 10px;
        }
        p {
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
            margin: 0;
            color: black;
        }
    }
}

</style>

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
