<template>
	<div id="app">
		<keep-alive include="Home,Want,Cart,Mine">
			<router-view />
		</keep-alive>
		<Tab v-show="!$route.meta.fullScreen" />
		
	</div>
</template>

<script>
	import Tab from '@/views/Tab/Tab.vue';
	export default {
		components: {
		Tab
		}
	};
</script>

<style>

</style>
