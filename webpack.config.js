var path=require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname,'src') 
module.exports = {
	entry: {
		"bundles":[
			'./src/index.js'
		],
		vendors: ['react']
	},
	output: {
	   filename: '[name].js',
	   path: path.join(__dirname, 'dist')
	},

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management111',
      filename: 'admin.html'
    }),

  ], 	
	
  module: {
    rules: [
      {
      	test: /\.jsx?$/,
	      use: 'babel-loader'
      }
    ]
  }

}
