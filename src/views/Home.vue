<template>
  <div class="home">
    <div class="head">
      <span>发布</span>
      <input type="text" placeholder="试试搜索你的好友名字">
    </div>
    <div class="main">

    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    
  }
}
</script>
<style scoped>
  .home .head{
    width: 100%;
    height: 40px;
    display: flex;
  }
  .head span{
    display: block;
    width: 60px;
    height: 40px;
    text-align: center;
    line-height: 40px;
  }
  .head input{
    flex: 1;
    height: 30px;
    outline: none;
    border: none;
    background-color: #eee;
    margin: 5px 10px;
    border-radius: 15px;
    text-align: center;
  }
  .main {
    flex: 1;
    overflow: auto;
  }
</style>
