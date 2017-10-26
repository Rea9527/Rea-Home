<template>
  <div id="MyNav">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">Home</el-menu-item>
        <el-submenu index="2">
            <template slot="title">Project</template>
            <el-menu-item index="2-1">Description</el-menu-item>
            <el-menu-item index="2-2">Design</el-menu-item>
            <el-menu-item index="2-3">Results</el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">Modeling</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .active {
    color: cornflowerblue;
  }
</style>
