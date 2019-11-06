<template>
    <div class="myfooter">
        <router-link to="/layout/home">首页</router-link>
        <router-link to="/layout/my">我的</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .myfooter .router-link-active{
    color: #f00
  }
  .myfooter{
      width: 100%;
      height: 40px;
      display: flex;
  }
  .myfooter a{
      flex: 1;
      text-align: center;
      line-height: 40px;
  }
</style>