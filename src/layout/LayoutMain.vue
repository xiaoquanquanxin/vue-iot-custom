<template>
    <el-main>
        我是main
        <router-view></router-view>
    </el-main>
</template>
<script lang="ts">
	import {Component, Vue} from 'vue-property-decorator';

	interface ITEM {
		date: string;
		name: string;
		address: string;
	}

	const item: ITEM = {
		date: '2016-05-02',
		name: '王小虎',
		address: '上海市普陀区金沙江路 1518 弄',
	};

	const tableData: Array<ITEM> = Array(20).fill(item);
	export default class LayoutMain extends Vue {
		tableData = tableData;
	}
</script>
