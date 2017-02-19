<template>
	<div>
		<slot></slot>
	</div>
</template>

<script>
	import $ from 'jquery'
	// import mdp from '../lib/markdown/markdown-plus.min.js'
	// import hljs from 'highlight'

	export default {
		props: {
			options: {
				type: Object
			}
		},

		mounted: function() {
			this.VMarkdown()
		},

		methods: {
			VMarkdown () {
			}
		}
	}
</script>

<style scoped>
 @import '../lib/markdown/markdown-plus.min.css'
</style>