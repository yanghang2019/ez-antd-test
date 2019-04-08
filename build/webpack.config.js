const path = require("path");

const plugins = require("./plugins");
const { tsRules, styleRules } = require("./rules");

const pkg = require("../package.json");

// console.log("webpackConfig",webpackConfig);
module.exports = {
	entry: "./src/index.tsx", //模块的入口
	resolve: {
		extensions: [".webpack.js", ".tsx", ".ts", ".scss"],
		modules: ["node_modules", "src"]
	},
	resolveLoader: {
		modules: ["node_modules", "src"]
	},
	devtool: "source-map",
	mode: "development",
	output: {
		//输出配置
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "../dist"),
		library: pkg.name,
		libraryTarget: "umd", // Important
		umdNamedDefine: true // Important
	},
	module: {
		//资源模块的处理器
		rules: [...tsRules, ...styleRules]
	},
	externals: ["antd", "react", "react-dom", "react-copy-to-clipboard"],
	plugins
};
