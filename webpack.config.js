//const HtmlWebPackPlugin = require("html-webpack-plugin");
//
//const htmlPlugin = new HtmlWebPackPlugin({
//		  template: "./index.html",
//		    filename: "./index.html"
//});

module.exports = 
{
    mode: 'development',
	entry: 
	{
		componentManager: './index.js',
	},
	module: 
	{
		rules: 
		[
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	resolve: 
	{
		extensions: ['.js', '.jsx']
	},
	output: 
	{
        library: "[name]",
		libraryTarget: "umd",
        path: __dirname+'/dist/',
        filename: 'bundle.js'
	},
	//devServer: 
	//{
	//	contentBase: './dist',
	//	compress: true,
	//	port: 1234
	//}
};
