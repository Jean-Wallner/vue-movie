<template>
    <div>
        Sidebar<br/>
        <router-link to="/">Home</router-link>
        <a @click.prevent="logout" href="">Logout</a>
        <ul>
            <li v-for="gender in genders">
                {{gender.name}}
                <router-link :to="{name: 'category', params: {id: getSlug(gender.name)}}" >Home</router-link>
            </li>
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
            }
        }
    }
</script>
