<template>
  <div class="layout">
      <router-view></router-view>
      <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyFooter from '../components/MyFooter'
export default {
    components:{
        MyFooter
    }
}
</script>

<style>
    .layout{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .home,.my{
        flex: 1;
    }
</style>