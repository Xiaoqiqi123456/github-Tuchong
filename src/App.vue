<template>
  <div id="app">
    <div class="my-home" v-if="loadingIndex" style="z-index: 99;">
        <div class="my-home__main">
            <img class="my-home__loading" src="../public/img/loading-spin.svg" alt="loading">
            <div class="my-home__title">
                努力加载中...
            </div>
            <div class="my-home__sub-title d">
                初次加载资源可能需要较多时间 请耐心等待
            </div>
        </div>
    </div>
    <router-view v-if="!loadingIndex"/>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        loadingIndex: true,
      };
    },
    watch: {},
    created() {
      let times = '500';//加载延时loading
      let that = this;
      setTimeout(function(){
        that.loadingIndex = false;
      },times);
    },
    methods: {},
    computed: {}
  };
</script>
<style>
#app {
  width: 100%;
  height: 100%;
  /*min-width: 1200px;*/
  overflow: hidden;
  font-size: 14px;
}

/* 使用css禁止选中文本 */
* {
  moz-user-select: -moz-none;
  -moz-user-select: none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.active:hover{
  color: #FF4400;
  cursor: pointer;
}
</style>
