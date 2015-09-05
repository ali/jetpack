/*eslint-disable */
var path = require('path');
var webpack = require('webpack');

module.exports = {
	context: path.resolve('./src'),

	entry: {
		main: [ './browser' ],
		bundle: [
			'webpack-dev-server/client?http://0.0.0.0:3000',
			'webpack/hot/only-dev-server',
			'./renderer/index.html',
			'./renderer/index.js'
		],
	},

	/* resolve: {
		root: path.join(__dirname),
		modulesDirectories: ['node_modules']
	}, */
	node: {
		__filename: true,
		__dirname: true,
		console: true,
		global: true,
		process: true,
		Buffer: true,
	},

	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js',
		libraryTarget: 'commonjs2'
	},
	devServer: {
		contentBase: './build/',
		inline: true,
	},
	devtool: 'eval-source-map',
	target: 'atom',
	module: {
		loaders: [
			{ test: /\.js$/, loaders: ['react-hot', 'babel-loader'], exclude: /^node_modules$/ },
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
			{ test: /\.html$/, loader: 'html!file?name=[name].[ext]' }
		]
	},
	plugins: [
		new webpack.IgnorePlugin(/vertx/),
		new webpack.HotModuleReplacementPlugin()
	]
};
