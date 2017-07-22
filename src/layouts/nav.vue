<template>
	<div slot="nav" class="nav">
    <ul>
      <li :v-for="link in links">
        <v-link :href="link.href">{{link.name}}</v-link>
      </li>
    </ul>
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
	.nav {
    position: fixed;
    float: left;
    width: 20%;
    height: 100%;
    /*border-right: 2px solid grey;*/
    padding: 10px;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .nav ul {
    list-style: none;
  }

  .nav li {

  }
</style>