<template>
  <main-layout>
  	<div class="main-content">
  		<p>Welcome home</p>
  	</div>
  </main-layout>
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
	p {
		margin: 0;
	}

	.main-content {
		width: 80%;
		height: 100%;
		float: right;
		padding: 10px;
	}
</style>