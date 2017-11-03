<template>
    <div >
        <div class="login">
            <div class="form">
                <h1>Vue <span>Movie</span></h1>
                <input type="text" v-model="username" >
                <input type="password" v-model="password">
                <button  @click="login">Login</button>
                <transition name="slide-fade">
                    <p v-if="errorForm" class="error">Wrong combinaison name / password</p>
                </transition>
            </div>
        </div>
        <screen-loader v-bind:loading="isLoading"></screen-loader>
    </div>
</template>

<script>
    import ScreenLoader from './ScreenLoader.vue';

    export default {
        data: function(){
            return {
                isLoading: false,
                errorForm: false,
                username: 'jean',
                password: '123456'
            }
        },
        components: {
            'screen-loader': ScreenLoader
        },
        methods: {
            login: function () {
                this.isLoading = true;
                //Simulate xhr request latency
                setTimeout(() => {
                    if(this.username.toLowerCase() === 'jean' && this.password === '123456'){
                        this.$ls.set('logged', true, 60 * 60 * 1000);
                        this.$router.push('/')
                    }else {
                        this.errorForm = true
                    }
                    this.isLoading = false;
                },2000)

            }
        },
        beforeMount: function (){
            if(this.$ls.get('logged')){
                this.$router.push('/')
            }else {
                this.$router.push('/login')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900');
    @import "../scss/login.scss";
</style>
