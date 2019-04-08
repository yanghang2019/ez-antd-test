const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [
	{
		test: /\.scss$/,
		use: [
			MiniCssExtractPlugin.loader,
			{
				loader: "css-loader",
				options: {
					// minimize: true,
					modules: true,
					localIdentName: "[path][name]_[local]_[hash:base64:5]"
				}
			},
			{
				loader: "sass-loader",
				options: {
					outputStyle: "expanded",
					sourceMap: true
				}
			}
		]
	}
];
