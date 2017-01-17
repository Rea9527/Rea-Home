<template>
	<div class="v-nav">
	</div>
</template>


<script>
	import VLink from './VLink.vue'

  export default {
    components: {
      VLink
    }
  }
</script>

<style scoped>
	.v-nav {
		float: left;
		height: 100%;
	}

	.v-nav ul li {
		float: left;
		list-style: none;
	}
</style>