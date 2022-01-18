<template>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246);height: 100vh;">
        <div>Iot云平台</div>
        <el-image alt="@/assets/img/logo.png"
                  :src="logo"
                  fit="fill"
        >
            <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
                <span class="demonstration">加载失败</span>
            </div>
        </el-image>
        <el-menu v-if="menuList && menuList.length"
                 :default-active="defaultActive"
                 :default-openeds="defaultOpened"
                 @select="selectFn"
        >
            <template v-for="menuItem in menuList">
                <el-menu-item
                        v-if="!menuItem.children || !menuItem.children.length"
                        :key="menuItem.index"
                        :index="menuItem.index"
                >{{menuItem.name}}
                </el-menu-item>
                <el-submenu v-else
                            :key="menuItem.index"
                            :index="menuItem.index"
                >
                    <template slot="title">
                        <i :class="menuItem.iconClass"></i>
                        <span>{{menuItem.name}}</span>
                    </template>
                    <template v-for="subMenuItem in menuItem.children">
                        <el-menu-item :key="subMenuItem.index"
                                      :index="subMenuItem.index"
                        >{{subMenuItem.name}}
                        </el-menu-item>
                    </template>
                </el-submenu>
            </template>
        </el-menu>
    </el-aside>
</template>
<script lang="ts">
	import {Component, Vue, Watch} from 'vue-property-decorator';
	import logo from '@/assets/img/logo.png';
	import {LayoutAsideInterface} from '@/interface/layoutInterface';
	import {Route} from 'vue-router';

	const menuList: Array<LayoutAsideInterface.MenuItemForService> = [
		{
			id: 1,
			name: '首页',
			path: '/home',
			iconClass: 'el-icon-location',
		},
		{
			id: 2,
			name: '产品大类',
			iconClass: 'el-icon-location',
			children: [
				{
					id: 21,
					name: '产品',
					path: '/production',
					iconClass: 'el-icon-location',
				}
			]
		}
	];
	const childrenIndexMap: { [key: string]: LayoutAsideInterface.MenuItemForWeb | undefined | null } = {};

	//  生成菜单
	function createMenuItem(
		item: LayoutAsideInterface.MenuItemForService,
		parent: LayoutAsideInterface.MenuItemForWeb | undefined | null
	): LayoutAsideInterface.MenuItemForWeb {
		const menuItemForWeb: LayoutAsideInterface.MenuItemForWeb = item as LayoutAsideInterface.MenuItemForWeb;
		menuItemForWeb.key = item.id.toString();
		menuItemForWeb.index = item.path || item.id.toString();
		//  把子菜单的index都绑定到上一级菜单
		if (item.path) {
			childrenIndexMap[item.path] = parent;
		}
		if (!item.children || !item.children.length) {
			return menuItemForWeb;
		}
		item.children.forEach((_item: LayoutAsideInterface.MenuItemForService) => {
			createMenuItem(_item, menuItemForWeb);
		});
		return menuItemForWeb;
	}


	@Component
	export default class LayoutAside extends Vue {
		menuList: Array<LayoutAsideInterface.MenuItemForWeb> = [];
		logo = logo;
		defaultActive = '';
		defaultOpened: Array<string> = [];

		created(): void {
			//  遍历组织数据
			this.menuList = menuList.map(item => {
				return createMenuItem(item, null);
			});
			this.getIndex();
		}

		@Watch('$route')
		change(currentRoute: Route, prevRoute: Route): void {
			console.log(currentRoute);
			console.log(prevRoute);
			this.getIndex();
		}

		getIndex(): void {
			const {path: defaultActive} = this.$route;
			// console.log(this.$router);
			//  匹配选中菜单
			this.defaultActive = defaultActive;
			// console.log(this.$route.path);
			//  当前菜单的父级菜单
			const parent = childrenIndexMap[defaultActive];
			if (!parent) {
				return;
			}
			//  匹配展开菜单
			this.defaultOpened = [parent.index];
		}

		selectFn(index: string): void {
			if (this.$route.path === index) {
				return;
			}
			this.$router.push(index);
		}
	}
</script>
<style>
    .el-aside {
        color: red;
    }
</style>
