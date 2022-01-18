const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
	mode: 'production',
	//	打包公共模块
	entry: {
		main: ['vue', 'vue-router', 'vuex', 'axios', 'element-ui'],
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'dll/_dll_[name].0.0.1.js',
		library: '_dll_[name]',
	},
	plugins: [
		new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['dll'] }),
		new webpack.DllPlugin({
			path: path.resolve(__dirname, 'public/dll', '[name].manifest.json'), //资源清单的保存位置
			context: __dirname,
			name: '_dll_[name]',
		}),
	],
};
