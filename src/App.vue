<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import MyFooter from './components/MyFooter.vue'
export default {
  components:{
    // MyFooter
  }
}
</script>

<style>
  .app a{
    text-decoration: none;
    color: #000;
  }
  .app{
    width: 100%;
    height: 100%;
  }

</style>