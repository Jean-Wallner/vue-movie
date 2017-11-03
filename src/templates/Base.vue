<template>
    <div>
        <div class="sidebar">
            <h1>sidebar</h1>
            <router-view name="sidebar"></router-view>
        </div><!--
        --><div class="main">
            <h1>main</h1>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        beforeMount: function (){
            if(this.$ls.get('logged')){
                this.$router.push('/')
            }else {
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped>

</style>
