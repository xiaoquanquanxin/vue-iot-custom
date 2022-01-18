//	layout-aside
namespace LayoutAsideInterface {
	//	todo	区分服务端返回和前端组织
	interface MenuItem {
		id: number;
		name: string;
		iconClass?: string;
		children?: Array<MenuItem> | null;
	}

	//	服务端
	export interface MenuItemForService extends MenuItem {
		//	导航链接
		path?: string;
		children?: Array<MenuItemForService> | null;

	}

	export interface MenuItemForWeb extends MenuItem {
		key?: string;
		//	index 作为导航的 link，element-ui使用
		index: string;

		children?: Array<MenuItemForWeb> | null;
	}


}

export {
	LayoutAsideInterface
};




