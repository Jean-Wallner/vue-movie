<template>
  <div>
        <!-- Login page -->
        <div v-if="$route.name === 'login'">
            <login-component></login-component>
        </div>
        <!-- Main app page -->
        <div v-if="$route.name !== 'login'">
            <base-component></base-component>
        </div>
  </div>
</template>

<script>
    import Base from './templates/Base.vue'
    import Login from './templates/Login.vue'

    export default {
        components: {
            'login-component': Login,
            'base-component': Base
        }
    }
</script>

<style>

</style>
