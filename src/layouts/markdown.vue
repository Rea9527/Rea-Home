<template>
	<v-markdown :options="options" id="mdp-container" style="height: 99%;">
		<div class="ui-layout-north">
			<div id="toolbar" class="noselect">
				<i title="Bold" class="fa fa-bold styling-icon" data-modifier="**"></i>
				<i title="Italic" class="fa fa-italic styling-icon" data-modifier="*"></i>
        <i title="Underline" class="fa fa-underline styling-icon" data-modifier="++"></i>
        <i title="Strikethrough" class="fa fa-strikethrough styling-icon" data-modifier="~~"></i>
        <i title="Mark" class="fa fa-pencil styling-icon" data-modifier="=="></i>
        <i class="dividor">|</i>
        <i title="Heading 1" class="fa heading-icon" data-level="1">h1</i>
        <i title="Heading 2" class="fa heading-icon" data-level="2">h2</i>
        <i title="Heading 3" class="fa heading-icon" data-level="3">h3</i>
        <i title="Heading 4" class="fa heading-icon" data-level="4">h4</i>
        <i title="Heading 5" class="fa heading-icon" data-level="5">h5</i>
        <i title="Heading 6" class="fa heading-icon" data-level="6">h6</i>
			</div>
		</div>
		<div class="ui-layout-center">
    	<div id="editor"></div>

    </div>
    <div class="ui-layout-east">
      <article class="markdown-body" id="preview"></article>
      <article class="markdown-body" id="cache" style="display: none"></article>
    </div>
	</v-markdown>
</template>


<script>
	import VMarkdown from '../components/VMarkdown.vue'
	import $ from 'jquery'

	export default {
		components: {
			VMarkdown
		},
		data () {
			return {
				options: {
					
				}
			}
		}
	}
</script>