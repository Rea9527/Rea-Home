<template>
  <div class="container">
    <div class="nav" id="myNav">
      <ul>
        <li v-for="link in links">
          <v-link :href="link.href">{{link.name}}</v-link>
        </li>
      </ul>
    </div>

    <slot></slot>
  </div>
</template>


<script>
  import VLink from '../components/VLink.vue'

  export default {
    components: {
      VLink
    },
    data () {
      return {
        links: [
          {href:'/', name: 'Home'},
          {href:'/blog', name: 'Blog'}
        ]
      }
    }
  }


</script>


<style scoped>
  .container {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .nav {
    float: left;
    width: 20%;
    height: 100%;
    /*border-right: 2px solid;*/
    padding: 10px;
  }

  .nav ul {
    list-style: none;
  }

  .nav li {

  }

  slot {
    width: 80%;
    float: right;
  }
</style>
