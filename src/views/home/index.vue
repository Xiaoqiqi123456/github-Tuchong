<template>
  <main>
    <div class="container">
      <nav class="secondary-nav">
        <ul class="nav-list">
          <li v-for="(item, index) in menus" :key="index" :class="item.path === path ? 'active' : ''" @click="selTab(item)">
            <a target="_self" class="subnav-text">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </nav>
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      path: '/explore',
      menus: [
        { name: '影像频道', path: '/videoChannel' },
        { name: '标签', path: '/explore' },
      ]
    };
  },
  mounted() {
    let that = this;
    setInterval(function () {
      that.path = that.$router.currentRoute.path;
    }, 1000)
  },
  methods: {
    selTab(item) {//标签切换
      this.path = item.path;
      this.$router.push({ path: item.path });
    },
  }
};
</script>

<style scoped>
main {
  display: block;
  min-height: 300px;
}

.secondary-nav {
  width: 100%;
  padding: 16px 0;
  background-color: #fff;
  -webkit-box-shadow: 0 2px 8px 0 rgba(133, 136, 138, 0.1);
  -moz-box-shadow: 0 2px 8px 0 rgba(133, 136, 138, .1);
  box-shadow: 0 2px 8px 0 rgba(133, 136, 138, 0.1);
}

.secondary-nav .nav-list {
  position: relative;
  text-align: center;
  font-size: 0;
}

ul,
li,
p {
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

.secondary-nav .nav-list li a {
  position: relative;
  display: block;
  height: 100%;
  margin: 0 20px;
  color: #222;
  text-decoration: none;
  cursor: pointer;
}

.secondary-nav .nav-list li a:hover {
  border-bottom: 3px solid #c99a05;
  color: #c99a05;
}</style>
