<template>
  <main>
    <div class="container">
      <div class="page-content">
        <div class="row-group" v-for="(item1,index1) in types" :key="index1">
          <div class="row-title">
            <h2 class="text-linear J_tag-type">{{item1.name}}</h2>

            <a class="tags-all-link"> 查看全部 &gt; </a>
          </div>

          <ul class="row-content tags-list">
            <li class="tag-square-base" v-for="(item2,index2) in item1.imgList" :key="index2" @click="tagsDetail">
              <a :title="item2.name">
                <img class="" :alt="item2.name" style="background-color: #bfb081;" :src="item2.img">
                <span class="tag-title J_tag-title">{{item2.name}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        types:[
          {
            name:'题材',
            imgList: [
              {name:'城市',img:require('../../../../public/img/1304246596.jpg')},
              {name:'人物',img:require('../../../../public/img/808466537.jpg')},
              {name:'模特',img:require('../../../../public/img/1036597220.jpg')},
              {name:'树',img:require('../../../../public/img/1241397446.jpg')},
              {name:'城市',img:require('../../../../public/img/1304246596.jpg')},
              {name:'人物',img:require('../../../../public/img/808466537.jpg')},
              {name:'模特',img:require('../../../../public/img/1036597220.jpg')},
              {name:'树',img:require('../../../../public/img/1241397446.jpg')},
              {name:'城市',img:require('../../../../public/img/1304246596.jpg')},
              {name:'人物',img:require('../../../../public/img/808466537.jpg')},
              {name:'模特',img:require('../../../../public/img/1036597220.jpg')},
              {name:'树',img:require('../../../../public/img/1241397446.jpg')},
              {name:'城市',img:require('../../../../public/img/1304246596.jpg')},
              {name:'人物',img:require('../../../../public/img/808466537.jpg')},
              {name:'模特',img:require('../../../../public/img/1036597220.jpg')},
              {name:'树',img:require('../../../../public/img/1241397446.jpg')},
              {name:'城市',img:require('../../../../public/img/1304246596.jpg')},
              {name:'人物',img:require('../../../../public/img/808466537.jpg')},
              {name:'模特',img:require('../../../../public/img/1036597220.jpg')},
              {name:'树',img:require('../../../../public/img/1241397446.jpg')},
              {name:'城市',img:require('../../../../public/img/1304246596.jpg')},
              {name:'人物',img:require('../../../../public/img/808466537.jpg')},
              {name:'模特',img:require('../../../../public/img/1036597220.jpg')},
              {name:'树',img:require('../../../../public/img/1241397446.jpg')},
            ]
          },
          {
            name:'风格',
            imgList: [
              {name:'抓拍',img:require('../../../../public/img/1006712932.jpg')},
              {name:'色彩',img:require('../../../../public/img/756234480.jpg')},
              {name:'时尚',img:require('../../../../public/img/1194342628.jpg')},
              {name:'性感',img:require('../../../../public/img/1221802155.jpg')},
              {name:'抓拍',img:require('../../../../public/img/1006712932.jpg')},
              {name:'色彩',img:require('../../../../public/img/756234480.jpg')},
              {name:'时尚',img:require('../../../../public/img/1194342628.jpg')},
              {name:'性感',img:require('../../../../public/img/1221802155.jpg')},
              {name:'抓拍',img:require('../../../../public/img/1006712932.jpg')},
              {name:'色彩',img:require('../../../../public/img/756234480.jpg')},
              {name:'时尚',img:require('../../../../public/img/1194342628.jpg')},
              {name:'性感',img:require('../../../../public/img/1221802155.jpg')},
            ]
          }
        ],

      };
    },
    mounted() {
    },
    methods: {
      tagsDetail(){//标签详情
        this.$router.push({path: '/tags'});
      },
    }
  };
</script>

<style scoped>
  main {
    display: block;
    min-height: 300px;
  }
  ul, li, p {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .secondary-nav .nav-list li {
    display: inline-block;
    height: 28px;
    font-size: 14px;
    line-height: 28px;
  }
  .secondary-nav .nav-list li.active a {
    border-bottom: 2px solid #c99a05;
  }
  .secondary-nav .nav-list li a {
    position: relative;
    display: block;
    height: 100%;
    margin: 0 20px;
    color: #222;
    text-decoration: none;
  }
  .secondary-nav .nav-list li a:hover {
    border-bottom: 2px solid #c99a05;
    color: #c99a05;
  }

  .page-content {
    max-width: 1163px;
    min-width: 767px;
    margin: 0 auto;
  }
  .page-content .row-title {
    padding: 40px 0;
  }
  .page-content .row-title h2 {
    display: inline-block;
    overflow: hidden;
    letter-spacing: 10px;
    line-height: 1.19;
    font-size: 32px;
    margin: 0;
    vertical-align: bottom;
    font-weight: 500;
  }
  .page-content .text-linear {
    z-index: 0;
  }
  .text-linear {
    position: relative;
    z-index: 1;
  }
  .page-content .text-linear:after {
    top: 23px;
  }
  .text-linear:after {
    content: '';
    position: absolute;
    top: 10px;
    left: 12px;
    z-index: -1;
    width: 100%;
    height: 14px;
    background: -webkit-linear-gradient(
      0deg
      ,#c99a05 30%,rgba(255,255,255,0) 30%);
    background: -moz-linear-gradient(0deg,#c99a05 30%,rgba(255,255,255,0) 30%);
    background: linear-gradient(
      90deg
      ,#c99a05 30%,rgba(255,255,255,0) 30%);
    -moz-background-size: 3px 100%;
    background-size: 3px 100%;
  }
  .page-content .row-title .tags-all-link {
    color: #85888a;
    font-size: 16px;
    line-height: 22px;
    margin-left: 20px;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }
  .page-content .tags-list {
    margin-right: -25px;
    margin-bottom: -25px;
    font-size: 0;
    max-width: 1188px;
    min-width: 792px;
  }
  ul, li, p {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .page-content .tags-list .tag-square-base {
    width: 173px;
    height: 173px;
    margin-right: 25px;
    margin-bottom: 25px;
    display: inline-block;
  }
  .page-content .tags-list .tag-square-base a {
    display: block;
    position: relative;
  }
  .page-content .tags-list .tag-square-base a:before {
    content: '';
    background: rgba(0,0,0,.3);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .page-content .tags-list .tag-square-base img {
    width: 100%;
    height: 100%;
  }
  .page-content .tags-list .tag-square-base .tag-title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    line-height: 173px;
    display: inline-block;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 10px;
    text-indent: 10px;
  }
</style>
