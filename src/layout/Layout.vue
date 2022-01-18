<template>
    <el-container style="height:100vh;">
        <LayoutAside/>
        <LayoutContainer/>
    </el-container>
</template>
<script lang="ts">
	import {Component, Vue} from 'vue-property-decorator';
	import LayoutAside from '@/layout/LayoutAside.vue';
	import LayoutContainer from '@/layout/LayoutContainer.vue';

	@Component({
		components: {
			LayoutAside,
			LayoutContainer,
		}
	})
	export default class Layout extends Vue {

	}
</script>
