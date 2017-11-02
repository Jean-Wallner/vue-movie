<template>
  <div>
      <div class="sidebar">
          <h1>sidebar</h1>
          <router-view name="sidebar"></router-view>
      </div>
      <div class="main">
          <h1>main</h1>
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
    export default {}
</script>

<style>
    body {
        margin: 0;
        font-size: 0;
    }

    div.sidebar {
        font-size: 16px;
        width: 20%;
        display: inline-block;
        background: #ffc3c3;
        vertical-align: top;
    }
    
    div.main {
        position: relative;
        font-size: 16px;
        width: 80%;
        display: inline-block;
        background: #c9c9ff;
        vertical-align: top;
    }
</style>
