const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	//	webpack配置
	configureWebpack: {
		externals: {
			'vue': 'Vue',
			'vue-router': 'VueRouter',
			'element-ui': 'ELEMENT',
			'vuex': 'Vuex',
			'axios': 'axios',
		},

		plugins: [
//			new BundleAnalyzerPlugin(),
			//	告诉 Webpack 使用动态链接库
//			new webpack.DllReferencePlugin({
//					// 	描述 lodash 动态链接库的文件内容
//					manifest:  require(path.resolve(__dirname, 'public/dll/main.manifest.json')),
//				},
//			),
		],
	},
};

console.log('🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉');






