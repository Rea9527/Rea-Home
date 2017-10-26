<template>
  <div id="app">
    <router-view class="main_content"></router-view> 
  </div>
</template>

<script>
  import MainLayout from '../layouts/main.vue'

  export default {
    components: {
      MainLayout
    }
  }
</script>

<style scoped>

</style>