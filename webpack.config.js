const currentTask = process.env.npm_lifecycle_event;
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fse = require('fs-extra');

/*********** Plugins and features we will be using in webpack **********/
const postCSSPlugins = [
	require('postcss-import'),
	require('postcss-mixins'),
	require('postcss-simple-vars'),
	require('postcss-nested'),
	require('autoprefixer'),
];

class RunAfterCompile {
	apply(compiler) {
		compiler.hooks.done.tap('Copy images and fonts', function () {
			fse.copySync('./app/assets/images', './docs/assets/images');
			fse.copySync('./app/assets/fonts', './docs/assets/fonts');
			fse.copySync('./app/_redirects', './docs/_redirects');
		});
	}
}

/*********** CSS CONFIG **********/
let cssConfig = {
	test: /\.css$/i,
	use: [
		'css-loader?url=false',
		{
			loader: 'postcss-loader',
			options: { postcssOptions: { plugins: postCSSPlugins } },
		},
	],
};

let pages = fse
	.readdirSync('./app')
	.filter(function (file) {
		return file.endsWith('.html');
	})
	.map(function (page) {
		return new HtmlWebpackPlugin({
			filename: page,
			template: `./app/${page}`,
		});
	});


/*********** CONFIG **********/
let config = {
	entry: './app/assets/scripts/App.js',
	plugins: pages,
	module: {
		rules: [cssConfig],
	},
};

/*********** DEVELOPMENT **********/
if (currentTask == 'dev') {
	cssConfig.use.unshift('style-loader');
	(config.output = {
		filename: 'bundled.js',
		path: path.resolve(__dirname, 'app'),
	}),
		(config.devServer = {
			before: function (app, server) {
				server._watch('./app/**/*.html');
			},
			contentBase: path.join(__dirname, 'app'),
			hot: true,
			port: 3000,
			host: '127.0.0.1',
		}),
		(config.mode = 'development');
}

/*********** PRODUCTION **********/
if (currentTask == 'build') {
	config.module.rules.push({
		test: /\.js$/,
		exclude: /(node_modules)/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
			},
		},
	});
	cssConfig.use.unshift(MiniCssExtractPlugin.loader);
	postCSSPlugins.push(require('cssnano'));
	config.output = {
		filename: '[name].[chunkhash].js',
		chunkFilename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'docs'),
	};
	config.mode = 'production';
	config.optimization = {
		splitChunks: {
			chunks: 'all',
		},
	};
	config.plugins.push(
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({ filename: 'styles.[chunkhash].css' }),
		new RunAfterCompile()
	);
}

module.exports = config;
