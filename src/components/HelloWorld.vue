<template>
	<v-container>
		<v-layout
			text-xs-center
			wrap
		>
			<v-flex xs12>
				<v-img
					:src="require('../assets/logo.svg')"
					class="my-3"
					contain
					height="200"
				></v-img>
			</v-flex>

			<v-flex mb-4>
				<h1 class="display-2 font-weight-bold mb-3">
					{{ msg }}
				</h1>
				<p class="subheading font-weight-regular">
					For a guide and recipes on how to configure / customize this project,<br>
					check out the
					<a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>
				</p>
			</v-flex>

			<v-flex
				mb-5
				xs12
			>
				<h2 class="headline font-weight-bold mb-3">Installed CLI Plugins</h2>

				<v-layout justify-center>
					<a
						v-for="(next, i) in plugins"
						:key="i"
						:href="next.href"
						class="subheading mx-3"
						target="_blank"
						rel="noopener"
					>
						{{ next.text }}
					</a>
				</v-layout>
			</v-flex>

			<v-flex
				mb-5
				xs12
			>
				<h2 class="headline font-weight-bold mb-3">What's next?</h2>

				<v-layout justify-center>
					<a
						v-for="(next, i) in whatsNext"
						:key="i"
						:href="next.href"
						class="subheading mx-3"
						target="_blank"
						rel="noopener"
					>
						{{ next.text }}
					</a>
				</v-layout>
			</v-flex>

			<v-flex
				xs12
				mb-5
			>
				<h2 class="headline font-weight-bold mb-3">Important Links</h2>

				<v-layout justify-center>
					<a
						v-for="(link, i) in importantLinks"
						:key="i"
						:href="link.href"
						class="subheading mx-3"
						target="_blank"
						rel="noopener"
					>
						{{ link.text }}
					</a>
				</v-layout>
			</v-flex>

			<v-flex
				xs12
				mb-5
			>
				<h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

				<v-layout justify-center>
					<a
						v-for="(eco, i) in ecosystem"
						:key="i"
						:href="eco.href"
						class="subheading mx-3"
						target="_blank"
						rel="noopener"
					>
						{{ eco.text }}
					</a>
				</v-layout>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue
{
	@Prop() private msg!: string;

	data()
	{
		return {
			plugins: [
				{
					text: 'vue-cli-plugin-preset-ts',
					href: 'https://github.com/bluelovers/vue-cli-plugin-preset-ts'
				},
				{
					text: 'typescript',
					href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript'
				},
				{
					text: 'pwa',
					href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa'
				},
				{
					text: 'unit-mocha',
					href: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha'
				},
				{
					text: 'vuetify',
					href: 'https://github.com/vuetifyjs/vue-cli-plugin-vuetify'
				},
			],
			ecosystem: [
				{
					text: 'vue-router',
					href: 'https://router.vuejs.org'
				},
				{
					text: 'vuex',
					href: 'https://vuex.vuejs.org'
				},
				{
					text: 'vue-devtools',
					href: 'https://github.com/vuejs/vue-devtools#vue-devtools'
				},
				{
					text: 'vue-loader',
					href: 'https://vue-loader.vuejs.org'
				},
				{
					text: 'awesome-vue',
					href: 'https://github.com/vuejs/awesome-vue'
				},
				{
					text: 'vuetify-loader',
					href: 'https://github.com/vuetifyjs/vuetify-loader'
				},
				{
					text: 'github',
					href: 'https://github.com/vuetifyjs/vuetify'
				},
				{
					text: 'awesome-vuetify',
					href: 'https://github.com/vuetifyjs/awesome-vuetify'
				}
			],
			importantLinks: [
				{
					text: 'Core Docs',
					href: 'https://vuejs.org'
				},
				{
					text: 'Forum',
					href: 'https://forum.vuejs.org'
				},
				{
					text: 'Community Chat',
					href: 'https://chat.vuejs.org'
				},
				{
					text: 'Twitter',
					href: 'https://twitter.com/vuejs'
				},
				{
					text: 'News',
					href: 'https://news.vuejs.org'
				},
				{
					text: 'Documentation',
					href: 'https://vuetifyjs.com'
				},
				{
					text: 'Chat',
					href: 'https://community.vuetifyjs.com'
				},
				{
					text: 'Made with Vuetify',
					href: 'https://madewithvuetifyjs.com'
				},
				{
					text: 'Twitter',
					href: 'https://twitter.com/vuetifyjs'
				},
				{
					text: 'Articles',
					href: 'https://medium.com/vuetify'
				},
			],
			whatsNext: [
				{
					text: 'Explore components',
					href: 'https://vuetifyjs.com/components/api-explorer'
				},
				{
					text: 'Select a layout',
					href: 'https://vuetifyjs.com/layout/pre-defined'
				},
				{
					text: 'Frequently Asked Questions',
					href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
				}

			]
		}
	}
}
</script>

<style>

</style>
