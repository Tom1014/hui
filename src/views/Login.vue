<template>
  <div class="login">
      <div class="top">
          <h3>圈子登录</h3>
      </div>
      <div class="bom">
          <input type="text" placeholder="用户名">
          <input type="text" placeholder="密码">
          <button>登录</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .login{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .top{
        width: 100%;
        height: 40px;
    }
    .top h3{
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 40px;
    }
    .bom{
        flex: 1;
        overflow: auto;
    }
    .bom input,button{
        width: 90%;
        height: 40px;
        margin: 10px 5%;
        font-size: 18px;
        border: none;
    }
    .bom input{
        /* border: 1px solid #666; */
        background-color: #eee;
    }
    .bom button{
        outline: none;
        border: none;
        background-color: tomato;
    }
</style>