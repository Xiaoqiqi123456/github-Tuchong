<template>
  <div class="page-scroll" style="width: 100%;height: 100%;overflow: auto;background: #f5f7f9;">
    <top></top>
    <router-view></router-view>
    <foot></foot>
    <el-backtop target=".page-scroll" :bottom="100">
      <div
        style="{
        height: 100%;
        width: 100%;
        background-color: gray;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #FFFFFF;
      }"
      >
        UP
      </div>
    </el-backtop>
  </div>
</template>

<script>
  import top from "../top/index.vue";
  import foot from "../foot/index.vue";

  export default {
      components: {
        top,
        foot
      },
      name: "index",
      data() {
        return {
        };
      },
      mounted() {
      },
      methods: {
      }
    };
</script>

<style>
</style>
