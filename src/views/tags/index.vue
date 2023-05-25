<template>
    <main>
      <div class="tag-header">
        <h1 class="tag-name">城市</h1>
        <span class="tag-posts">4973827组作品</span>
        <a class="tag-follow btn btn-yellow">订阅</a>
      </div>
      <nav class="secondary-nav">
        <ul class="nav-list">
          <li @click="selTab('1')" :class="tabIndex==='1'?'active':''" data-index="0">
            <a target="_self" class="subnav-text">
              热门
            </a>
          </li>
          <li @click="selTab('2')" :class="tabIndex==='2'?'active':''" data-index="1">
            <a target="_self" class="subnav-text">
              最新
            </a>
          </li>
        </ul>
      </nav>
      <div class="content">
        <div class="widget-gallery">
          <ul class="pagelist-wrapper">
          <li class="gallery-item impression-item" v-for="(item1,index1) in list" :key="index1" :style="'height: 462px; margin-bottom: 0px; display: inline-block; margin-left: 0px;width:'+(width + 'px;')">
            <div class="post-item">
              <div class="post-body">
                <div class="post-image J_LazyLoad tt-img-loaded" :style="'background-color: rgb(130, 130, 130); background-image: url('+item1.bg+');'">
                </div>
                <div class="post-info post-info--multiphoto">
                  <h3>{{item1.title}}</h3>
                  <div class="post-tags">
                    <a class="event-tag popover-action" v-for="(item2,index2) in item1.eventTag" :key="index2+'_event_tag'">{{item2}}</a>
                    <a class="common-tag popover-action" v-for="(item3,index3) in item1.commonTag" :key="index3+'_common_tag'">{{item3}}</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="gallery-foot">
              <div class="post-foot ">
                <a class="site-icon popover-action"><i class="vip-yellow vip-right"></i>
                  <img :src="item1.user.avatar" :alt="item1.user.nickname">
                </a>
                <a class="site-link popover-action">{{item1.user.nickname}}</a>
                <time>{{item1.time}}</time>
              </div>
              <div class="post-ops">
                <a><i class="el-icon-star-off" style="font-size: 20px;color: gray;"></i>{{item1.likeNum}}</a>
                <a><i class="el-icon-chat-square" style="font-size: 20px;color: gray;"></i>{{item1.commentNum}}</a>
              </div>
            </div>
          </li>
        </ul>
          <i class="icon-loading--yellow"></i>
          <div class="pagelist-load-more">加载更多</div>
          <i class="icon-end" style="display: none;"></i>
        </div>
      </div>

    </main>
</template>

<script>
  import {isIos,isAndroid} from "@/utils/validate.js";
  export default {
    data() {
      return {
        tabIndex: '1',
        width: 351,
        colNum: 5,
        list:[
          {title:'海边',bg:require('../../../public/img/678442815.jpg'),eventTag:['山东摄影家俱乐部','我们这群拍海人'],commonTag:['海岸','海','水域','沙','城市','岛屿','天空','旅游'],user:{avatar:require('../../../public/img/avatar.jpg'),nickname:'多潇潇 '},time:'3月15日',likeNum: 1050,commentNum: 5},
          {title:'风',bg:require('../../../public/img/691681199.jpg'),eventTag:['山东摄影家俱乐部','我们这群拍海人'],commonTag:['海岸','海','水域','沙','城市','岛屿','天空','旅游'],user:{avatar:require('../../../public/img/avatar.jpg'),nickname:'多潇潇 '},time:'3月15日',likeNum: 1050,commentNum: 5},
          {title:'小蜜蜂',bg:require('../../../public/img/803485850.jpg'),eventTag:['山东摄影家俱乐部','我们这群拍海人'],commonTag:['海岸','海','水域','沙','城市','岛屿','天空','旅游'],user:{avatar:require('../../../public/img/avatar.jpg'),nickname:'多潇潇 '},time:'3月15日',likeNum: 1050,commentNum: 5},
          {title:'花',bg:require('../../../public/img/746600482.jpg'),eventTag:['山东摄影家俱乐部','我们这群拍海人'],commonTag:['海岸','海','水域','沙','城市','岛屿','天空','旅游'],user:{avatar:require('../../../public/img/avatar.jpg'),nickname:'多潇潇 '},time:'3月15日',likeNum: 1050,commentNum: 5},
          {title:'柔',bg:require('../../../public/img/759773313.jpg'),eventTag:['山东摄影家俱乐部','我们这群拍海人'],commonTag:['海岸','海','水域','沙','城市','岛屿','天空','旅游'],user:{avatar:require('../../../public/img/avatar.jpg'),nickname:'多潇潇 '},time:'3月15日',likeNum: 1050,commentNum: 5},
          {title:'海边',bg:require('../../../public/img/678442815.jpg'),eventTag:['山东摄影家俱乐部','我们这群拍海人'],commonTag:['海岸','海','水域','沙','城市','岛屿','天空','旅游'],user:{avatar:require('../../../public/img/avatar.jpg'),nickname:'多潇潇 '},time:'3月15日',likeNum: 1050,commentNum: 5},
          {title:'风',bg:require('../../../public/img/691681199.jpg'),eventTag:['山东摄影家俱乐部','我们这群拍海人'],commonTag:['海岸','海','水域','沙','城市','岛屿','天空','旅游'],user:{avatar:require('../../../public/img/avatar.jpg'),nickname:'多潇潇 '},time:'3月15日',likeNum: 1050,commentNum: 5},
          {title:'小蜜蜂',bg:require('../../../public/img/803485850.jpg'),eventTag:['山东摄影家俱乐部','我们这群拍海人'],commonTag:['海岸','海','水域','沙','城市','岛屿','天空','旅游'],user:{avatar:require('../../../public/img/avatar.jpg'),nickname:'多潇潇 '},time:'3月15日',likeNum: 1050,commentNum: 5},
          {title:'花',bg:require('../../../public/img/746600482.jpg'),eventTag:['山东摄影家俱乐部','我们这群拍海人'],commonTag:['海岸','海','水域','沙','城市','岛屿','天空','旅游'],user:{avatar:require('../../../public/img/avatar.jpg'),nickname:'多潇潇 '},time:'3月15日',likeNum: 1050,commentNum: 5},
          {title:'柔',bg:require('../../../public/img/759773313.jpg'),eventTag:['山东摄影家俱乐部','我们这群拍海人'],commonTag:['海岸','海','水域','沙','城市','岛屿','天空','旅游'],user:{avatar:require('../../../public/img/avatar.jpg'),nickname:'多潇潇 '},time:'3月15日',likeNum: 1050,commentNum: 5},
          {title:'海边',bg:require('../../../public/img/678442815.jpg'),eventTag:['山东摄影家俱乐部','我们这群拍海人'],commonTag:['海岸','海','水域','沙','城市','岛屿','天空','旅游'],user:{avatar:require('../../../public/img/avatar.jpg'),nickname:'多潇潇 '},time:'3月15日',likeNum: 1050,commentNum: 5},
          {title:'风',bg:require('../../../public/img/691681199.jpg'),eventTag:['山东摄影家俱乐部','我们这群拍海人'],commonTag:['海岸','海','水域','沙','城市','岛屿','天空','旅游'],user:{avatar:require('../../../public/img/avatar.jpg'),nickname:'多潇潇 '},time:'3月15日',likeNum: 1050,commentNum: 5},
          {title:'小蜜蜂',bg:require('../../../public/img/803485850.jpg'),eventTag:['山东摄影家俱乐部','我们这群拍海人'],commonTag:['海岸','海','水域','沙','城市','岛屿','天空','旅游'],user:{avatar:require('../../../public/img/avatar.jpg'),nickname:'多潇潇 '},time:'3月15日',likeNum: 1050,commentNum: 5},
          {title:'花',bg:require('../../../public/img/746600482.jpg'),eventTag:['山东摄影家俱乐部','我们这群拍海人'],commonTag:['海岸','海','水域','沙','城市','岛屿','天空','旅游'],user:{avatar:require('../../../public/img/avatar.jpg'),nickname:'多潇潇 '},time:'3月15日',likeNum: 1050,commentNum: 5},
          {title:'柔',bg:require('../../../public/img/759773313.jpg'),eventTag:['山东摄影家俱乐部','我们这群拍海人'],commonTag:['海岸','海','水域','沙','城市','岛屿','天空','旅游'],user:{avatar:require('../../../public/img/avatar.jpg'),nickname:'多潇潇 '},time:'3月15日',likeNum: 1050,commentNum: 5},
        ]
      };
    },
    mounted() {
      let clientWidth = document.body.offsetWidth;
      if(isAndroid() || isIos()){
        this.colNum = 2;
        clientWidth = clientWidth - 100;
      }else{
        clientWidth = clientWidth - 310;
      }
      this.width = clientWidth / this.colNum;
      console.info(clientWidth);
    },
    methods: {
      selTab(index){//切换tab
        this.tabIndex = index;
      }
    }
  };
</script>

<style scoped>
  main {
    display: block;
    min-height: 300px;
  }
  .tag-header {
    position: relative;
    padding: 16px 0;
    font-size: 0;
    background-color: #fff;
  }
  .tag-header .tag-name {
    position: relative;
    z-index: 1;
    display: inline-block;
    height: 38px;
    margin: 0 0 0 40px;
    letter-spacing: 20px;
    font-size: 32px;
    line-height: 38px;
    font-weight: 500;
    color: #222;
  }
  .tag-header .tag-posts {
    margin-left: 30px;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 5px;
    line-height: 14px;
    color: #c99a05;
    vertical-align: bottom;
  }
  .tag-header .tag-follow {
    position: absolute;
    top: 90px;
    left: 40px;
    z-index: 1;
  }
  .btn-yellow {
    color: #c99a05;
    border: solid 1px #c99a05;
  }
  .btn {
    cursor: pointer;
    float: right;
    line-height: 28px;
    margin-right: 15px;
    font-size: 14px;
    text-align: center;
    width: 62px;
    height: 28px;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }
  .tag-header .tag-name::before {
    content: '|||||||||||||||||||||||||||||||||||||||||';
    position: absolute;
    bottom: 0;
    left: 12px;
    z-index: -1;
    width: 84px;
    color: #c99a05;
    overflow: hidden;
    font-weight: lighter;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0;
  }

  .secondary-nav {
    width: 100%;
    padding: 16px 0;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 8px 0 rgba(133, 136, 138,0.1);
    -moz-box-shadow: 0 2px 8px 0 rgba(133, 136, 138,0.1);
    box-shadow: 0 2px 8px 0 rgba(133, 136, 138,0.1);
  }
  .secondary-nav .nav-list {
    position: relative;
    text-align: center;
    font-size: 0;
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
    border-bottom: 3px solid #c99a05;
  }
  .secondary-nav .nav-list li a:hover {
    border-bottom: 3px solid #c99a05;
    color: #c99a05;
  }
  .secondary-nav .nav-list li a {
    position: relative;
    display: block;
    height: 100%;
    margin: 0 20px;
    color: #222;
    text-decoration: none;
  }

  .widget-gallery {
    min-width: 800px;
    max-width: 1880px;
    padding: 35px;
    margin: 0 auto;
    font-size: 0;
  }
  .pagelist-wrapper {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .gallery-item {
    display: none;
    position: relative;
    padding: 5px 5px 66px;
    font-size: 14px;
    vertical-align: top;
  }
  .gallery-item .post-item {
    position: absolute;
    left: 5px;
    top: 5px;
    right: 5px;
    bottom: 65px;
    background-color: #fff;
    color: #222;
  }
  .gallery-item .post-body {
    position: absolute;
    left: 6px;
    top: 6px;
    right: 6px;
    bottom: 1px;
  }
  .gallery-item .post-image {
    display: block;
    width: 100%;
    height: 100%;
    -moz-background-size: cover;
    background-size: cover;
    background-position: center;
  }
  .gallery-item .post-info--multiphoto {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    background: rgba(0,0,0,0);
    color: #fff;
    -webkit-transition: opacity .2s ease-out,background .2s ease-out;
    -moz-transition: opacity .2s ease-out,background .2s ease-out;
    transition: opacity .2s ease-out,background .2s ease-out;
  }
  .gallery-item .post-info {
    height: 100%;
    width: 100%;
    font-size: 13px;
    cursor: pointer;
    color: #222;
  }
  .gallery-item .post-info h3{
    padding: 20px 20px 0 20px;
    color: #FFFFFF;
  }
  .gallery-item .post-info .post-tags {
    padding: 0 20px;
    height: 22px;
    margin-top: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .gallery-item .post-info .post-tags a.event-tag {
    color: #c99a05;
  }
  .gallery-item .post-info .post-tags a {
    margin-right: 7px;
    font-size: 13px;
    line-height: 24px;
    color: #85888a;
  }
  .gallery-item .post-info--multiphoto .post-tags a {
    color: #fff;
  }
  .gallery-item .post-info--multiphoto .post-tags a:hover {
    border-bottom: 1px solid #fff;
  }
  .gallery-item .post-info .post-tags a::before {
    content: '#';
  }
  .gallery-item .gallery-foot {
    position: absolute;
    bottom: 5px;
    left: 5px;
    right: 5px;
    height: 60px;
    background-color: #fff;
  }
  .gallery-item .gallery-foot .post-foot {
    position: relative;
    height: 62px;
    padding: 22px 6px 12px 50px;
    font-size: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .gallery-item .gallery-foot .post-foot .site-link {
    color: #222;
    font-size: 14px;
    line-height: 20px;
  }
  .gallery-item .gallery-foot .post-foot .site-icon {
    position: absolute;
    left: 6px;
    top: 14px;
    width: 35px;
    height: 35px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    z-index: 2;
  }
  .vip-right {
    position: absolute;
    width: 12px;
    height: 12px;
    bottom: 0;
    right: 0;
    z-index: 1;
  }
  .vip-yellow {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAABKdJREFUSA2NVt9PXEUUPjPDAssuCIsLC7W0JtJEraaNTWy0aUpCTNTIi2n/AkzTF9/77EP/BhMS3/ENY/wBaa1VU001GhNNSmyB0rKwUCjsugv0zvh9594La1HjJHfvvTNzvvOd75w5d438xwhhsVfKv4+F7c0LIYRhY0xJjBU8l4O1sy7TPSml56aMeWbt32DMPy2EsNEjc1eveBPGQ73iwqNZkZ018btVEWPEZDpFskWxXcfEZIsRnE7YQ2cuG9O9/iTeAQehcnMk1Ban/OZC3pevidSXJAhAAazs6YBR4M556RgQVzonNn+4atuKY6Z4Gkb7428Owr3Px/3u5od+cdqGtR8PAGJCxNrYmnc40jk6LZwUO3DOu5bOi6Y0MpG62HNA5n5rYSa687GVrT8SILBMmMesiReDpvOULL6smPyz4g6PeZcbGDU9pzQSpUPNwxZkuT9tpXonBgVbghCYAEEpJc+cRwSxbMke7v9zXqKVGzaqV6Y0j7BRB7KAhNYW8mEVsmBjqrHeKQudqCTJ8xNRaDQqHZxs/ApH9/N++Ycr5GRYin7u++Xo9kcuIKExYyuZd25yXUf0YFqiXz5QR4GiwgH32SPvSsuxS+I3Z2X31vtJxNiAxLcMnY9c6Xi/1TpvrDpplPeYE8Rv/JbAg3zxNRHXCuA4ujhCzB96Oyaw9Ble0shRYY0VCdvrTh7Oj9mogUP06LaWXKq5MU4ef/ue+LWfFMBkcmJ6X9lLOAmYnpfF5oYkPK6LX76e2JND7MjX7kq0U71A5YZ5iMiOodOJyoAVv/jpfhT9Z/ci5D43+Jau+ZWvBHTVdt8eGLvrhByGmFLiCVXt04TyjsuvfKMMiWT7Xodj1gTWcJJt31lOS7T0hVaYVlSzfVRnVCU4gFHCnDpqJIyLl9+BkxsKZFq7IctLum5Lo2KQE4/zEqo4M3v2xAKG4uAZw7JxmUw+XkgYsgXohc3R0oxu1M3FM+rYDb6pc8qegAlJBU9tW3LELFt2Rcn2wQAbkxApV5qssP4zJEaOMBxkMk89j75zVELUkKhynSDxldojci3h1l7Oz1q2XNs1rMziA8MkJ5fCQmc2PQzT3ictw5f0OVr5GgsNTKayxAVCh1qNuSPiMvlJq/0cLTdkB9QzpdGEMwrrVE+/fFVB+WM7QQYjKn+ppAioOcAc7Whv2/vFthUi6X5hyurHAv2cLZeJ1U00wkaWq+aiNie+Ooe5ePjqXQk1JJeykDGfGEkqT+FVTNgJY7rWNNX8WLCfS88J3UyjtBLY1BhytBzLRBfKnsAKjoiTPeqo60Wx2cGqe/rkZe4lVR2hcmsk2n4wE937xIbavDIjo1Qygul2zMV3vCeSxJLivWNIMv1veNdRGjWdx5WRRkAPpnjqGj8W7OemcAIRQH+VII4glSCNTqVLJaIvMFfwttzFFFxx+dM8wjoiYT9Hy41WvxPZrqgUqbM4KrxpJODXXhRXOA1ZBqou2z/WDE5cxn1g8GOh/Tz4cb/90Hkkmb1FcPxVFhwi21oQkzsaVwuLBJr/r49+szf924KWy64IKqhP/G3hwAnFhb8t+UmWIqul2a75+S84kskCsLUBoAAAAABJRU5ErkJggg==);
    -moz-background-size: 100% 100%;
    background-size: 100% 100%;
  }
  .gallery-item .gallery-foot .post-foot .site-icon img {
    display: block;
    width: 100%;
    height: 100%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .gallery-item .gallery-foot .post-foot time {
    margin-left: 8px;
    color: #85888a;
    font-size: 14px;
    line-height: 20px;
    vertical-align: bottom;
  }
  .gallery-item .gallery-foot .post-ops {
    position: absolute;
    right: 8px;
    top: 20px;
    padding-left: 20px;
    font-size: 14px;
    text-align: right;
    background: #fff;
    background: -webkit-linear-gradient(left,rgba(255,255,255,.7) 0,#fff 20px,#fff 100%);
    background: -moz-linear-gradient(left,rgba(255,255,255,.7) 0,#fff 20px,#fff 100%);
    background: linear-gradient(to right,rgba(255,255,255,.7) 0,#fff 20px,#fff 100%);
  }
  [class^=icon-], [class*=" icon-"] {
    font-family: icomoon!important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .gallery-item .gallery-foot .post-ops .icon-like:before, .gallery-item .gallery-foot .post-ops .icon-comment:before {
    color: #e0e0e0;
    vertical-align: middle;
  }
  .icon-like:before {
    content: "\e909";
  }
  [class^=icon-]:before, [class*=" icon-"]:before {
    font-size: 32px;
  }
  .gallery-item .gallery-foot .post-ops .icon-comment {
    margin-left: 10px;
  }
  .icon-comment:before {
    content: "\e906";
  }
  .gallery-item .post-info--multiphoto:hover {
    background: rgba(0,0,0,.4);
    opacity: 1;
  }
  .widget-gallery .pagelist-load-more {
    width: 328px;
    height: 56px;
    margin: 100px auto 0;
    line-height: 56px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    background-color: #000;
    cursor: pointer;
  }
  .icon-end {
    display: block;
    margin: 100px auto 20px;
    text-align: center;
    color: #e0e0e0;
  }

</style>
