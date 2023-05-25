<template>
  <header class=" ">
    <nav class="nav-wide">
      <div class="nav-left">
        <a @click="homePage">
          <i class="nav-logo"></i>
        </a>
        <ul class="supnav-list">
          <li class="supnav-item"><a target="_blank" rel="noopener" class="">视频素材</a></li>
          <li class="supnav-item"><a class="" @click="homePage">首页</a></li>
          <li class="supnav-item"><a class="">社区</a></li>
          <li class="supnav-item"><a class="">活动</a></li>
          <li class="supnav-item"><a class="video_enter ">短视频</a><i class="subnav-red-tip-video" style="display: inline;"></i></li>
          <li class="supnav-item subnav-trigger tuchong_stock_enter_list">
            <a class="">发现<i class="supnav-red-tip"></i></a>
            <ul class="subnav-list">
              <li @click="homePage"><a>标签</a></li>
              <li><a>摄影师</a></li>
              <li><a>影像频道</a></li>
              <li><a>教程</a></li>
              <li><a>器材</a></li>
              <li class="tuchong_stock_enter"><a>正版图片下载</a><i class="subnav-red-tip" style="display: inline;"></i></li>
            </ul>
          </li>
          <li class="supnav-item subnav-trigger">
            <a class="">更多</a>
            <ul class="subnav-list">
              <li><a>创意图库</a></li>
              <li><a>下载APP</a></li>
              <li><a>商务合作</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="nav-right">
        <!-- <div class="nav-search">
            <i class="icon-search J-search-btn"></i>
            <form action="https://tuchong.com/search/all/" method="get">
                <input required class="search-input" type="text" name="query" placeholder="搜索" autocomplete="off">
            </form>
        </div> -->
        <!-- 非登录状态 -->
        <a class="nav-login login-trigger" @click="openLoginModal">登录</a>
        <a class="nav-register register-trigger" @click="openRegisterModal">注册</a>
      </div>
    </nav>

    <login-modal ref="loginModal"></login-modal>
    <register-modal ref="registerModal"></register-modal>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex';
  import loginModal from "../../components/login_modal.vue";
  import registerModal from "../../components/register_modal.vue";

  export default {
    components: {
      loginModal,
      registerModal
    },
    data() {
      return {
        input: ''
      };
    },
    mounted() {
    },
    methods: {
      homePage(){
        this.$router.push({path: '/index'});
      },
      openLoginModal(){
        this.$refs.loginModal.openModal();
      },
      openRegisterModal(){
        this.$refs.registerModal.openModal();
      }
    }
  };
</script>

<style scoped>
  header {
    position: relative;
    min-width: 100%;
    height: 60px;
    margin: 0 auto;
    background-color: #000;
    font-weight: 500;
    z-index: 4;
  }
  header .nav-wide {
    min-width: 800px;
    /*max-width: 1880px;*/
    padding: 0 40px;
    margin: 0 auto;
  }
  header .nav-wide:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
  }
  header .nav-wide .nav-left {
    float: left;
    height: 60px;
    font-size: 0;
  }
  .supnav-list .supnav-item>a:hover {
    color: #c99a05;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }
  header .nav-logo {
    display: inline-block;
    height: 22px;
    width: 80px;
    margin: 19px 0;
    background-image: url("../../../public/img/logo.png");
    -moz-background-size: 100% 100%;
    background-size: 100% 100%;
  }
  .nav-left .supnav-list {
    margin-left: 24px;
  }
  .supnav-list {
    display: inline-block;
    vertical-align: top;
    line-height: 1;
    font-size: 0;
  }
  ul, li, p {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .supnav-list .supnav-item {
    position: relative;
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
  }
  ul, li, p {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .supnav-list .supnav-item a {
    display: block;
    line-height: 60px;
    color: #fff;
    font-weight: 500;
  }
  .nav-left .supnav-item>a {
    position: relative;
    padding: 0 12px;
    letter-spacing: 2px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }
  .supnav-list .subnav-list {
    position: absolute;
    top: 59px;
    z-index: 1;
    left: 50%;
    display: none;
    width: 130px;
    margin-top: 1px;
    margin-left: -65px;
    line-height: 1;
    opacity: 0;
    -webkit-transition: opacity .5s ease;
    -moz-transition: opacity .5s ease;
    transition: opacity .5s ease;
    border-top: 10px solid rgba(0,0,0,0);
  }
  .supnav-list .subnav-list li:first-child {
    padding-top: 10px;
  }
  .supnav-list .subnav-list li {
    position: relative;
    background-color: #222;
  }
  .supnav-list .subnav-list li a {
    display: block;
    height: 40px;
    line-height: 40px;
    color: #fff;
    text-align: center;
  }
  .supnav-list .subnav-list li:last-child {
    padding-bottom: 10px;
  }
  header .nav-wide .nav-right {
    float: right;
    height: 60px;
    font-size: 0;
  }
  .nav-register, .nav-login {
    display: inline-block;
    margin-top: 12px;
    margin-left: 30px;
    height: 36px;
    line-height: 36px;
    color: #fff;
    font-size: 14px;
  }
  .nav-register {
    width: 100px;
    text-align: center;
    background-color: #c99a05;
  }
  .nav-register, .nav-login {
    display: inline-block;
    margin-top: 12px;
    margin-left: 30px;
    height: 36px;
    line-height: 36px;
    color: #fff;
    font-size: 14px;
  }
  header .nav-wide:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
  }
  .supnav-list .subnav-list li::after {
    content: attr(data-count);
    position: absolute;
    left: 69px;
    top: 7px;
    padding: 0 4px;
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
    border-radius: 7px;
    font-size: 12px;
    color: #fff;
    background-color: #e60905;
    line-height: 14px;
  }
  .supnav-list .subnav-list:after {
    content: "";
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    height: 1px;
  }
  .nav-left .supnav-item i {
    display: none;
    position: absolute;
    top: 18px;
    right: 8px;
    width: 6px;
    height: 6px;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    background: red;
  }
  .supnav-list .subnav-trigger:hover .subnav-list {
    display: block;
    opacity: 1;
  }
  .supnav-list .subnav-list li a:hover {
    color: #c99a05;
  }
</style>
