<template>
	<div id="mymark">
		<slot></slot>
	</div>
</template>

<script>
	
	import mdp from 'markdown-core/markdown-core-node'
	// import $ from 'jquery'
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
				var html = mdp.render('#mymark')
				console.log(html);
			}
		}
	}
</script>

<style scoped>
 @import '../lib/markdown/markdown-plus.min.css'
</style>