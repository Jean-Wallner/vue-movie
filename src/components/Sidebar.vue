<template>
    <div>

        <div class="sidebar-header">
            <h3 @click="goHome">Vue movie</h3>
        </div>

        <ul class="list-unstyled components">
            <li v-for="gender in genders">
                <router-link :to="{name: 'category', params: {id: getSlug(gender.name)}}" >{{gender.name}}</router-link>
            </li>
        </ul>

        <ul class="list-unstyled CTAs">
            <li><a @click.prevent="logout" href="#" class="download">Log Out</a></li>
        </ul>

    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                genders: [
                    {name: 'Action'},
                    {name: 'Adventure'},
                    {name: 'Comedy'},
                    {name: 'Crime'},
                    {name: 'Drama'},
                    {name: 'Fantasy'},
                    {name: 'Romance'},
                ]
            }
        },
        methods: {
            getSlug: function (genre) {
              return genre.toString().toLowerCase()
                .replace(/\s+/g, '-')           // Replace spaces with -
                .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
                .replace(/\-\-+/g, '-')         // Replace multiple - with single -
                .replace(/^-+/, '')             // Trim - from start of text
                .replace(/-+$/, '');            // Trim - from end of text
            },
            logout: function () {
                this.$ls.remove('logged');
                this.$router.push('/login')
            },
            goHome: function () {
                this.$router.push('/')
            }
        }
    }
</script>
