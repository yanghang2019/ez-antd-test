const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerNotifierWebpackPlugin = require("fork-ts-checker-notifier-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = [
	new ForkTsCheckerNotifierWebpackPlugin({ title: "TypeScript", excludeWarnings: false }),
	new ForkTsCheckerWebpackPlugin({
		tslint: true,
		async: false,
		useTypescriptIncrementalApi: true,
		memoryLimit: 4096
	}),
	new MiniCssExtractPlugin({
		filename: "[name].min.css", ////都提到build目录下的css目录中
		chunkFilename: "[name].min.csss"
	})
];
