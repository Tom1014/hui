<template>
  <div class="my">
    <div class="header">
      <img src="" alt="">
      <ul>
        <li><h3>张俊杰♂</h3></li>
        <li><span>年龄：18</span><span>活跃度32</span></li>
      </ul>
    </div>
    <div class="mainer">
      <ul>
        <li><span>个人信息</span><span>></span></li>
        <li><span>我的评论</span><span>></span></li>
        <li><span>个人收藏</span><span>></span></li>
      </ul>
      <ol>
        <li><span>修改密码</span></li>
        <li><span>退出</span></li>
      </ol>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      list:['个人信息','我的评论','个人收藏'],
      delt:['修改密码','退出']
    }
  }
}
</script>
<style scoped>
  .my{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .header{
    width: 100%;
    height: 150px;
    background-color: tomato;
    display: flex;
  }
  .header img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #eee;
    margin: 35px 20px;
  }
  .header ul{
    flex: 1;
    margin-top: 40px;
  }
  .header ul li{
    list-style: none;
    margin-bottom: 20px;
    color: #fff;
  }
  .header ul li span{
    margin-right: 20px;
  }
  .mainer{
    flex: 1;
    overflow: auto;
  }
  .mainer ul,ol{
    width: 100%;
    border-top: 20px solid #eee;
  }
  .mainer li{
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding-left: 15px;
    list-style: none;
    display: flex;
  }
  .mainer ul li span:first-child{
    flex: 1;
  }
  .mainer ul li span:last-child{
    width: 80px;
    height: 40px;
    text-align: center;
    line-height: 40px;
  }
</style>
