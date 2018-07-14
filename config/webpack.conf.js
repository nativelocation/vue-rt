/*import path from 'path';
import config from '../config';
import VueLoaderPlugin from 'vue-loader/lib/plugin'
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';*/
const path = require('path');
const config = require('.');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

function resolve (dir) {
	return path.join(__dirname, '..', dir);
}

module.exports = (env, argv) => {
	var isProduction = argv.mode === 'production';
	function assetsPath(_path) {
		var assetsSubDirectory = isProduction
			? config.build.assetsSubDirectory
			: config.dev.assetsSubDirectory;
		return path.posix.join(assetsSubDirectory, _path);
	};
	const webpackConfig = {
		mode: argv.mode,
		entry: {
			app: '@'
		},
		resolve: {
			extensions: ['.js', '.vue', '.json', 'scss'],
			alias: {
				'vue$': 'vue/dist/vue.esm.js',
				'@': resolve('src'),
				// @ symbol not being resoled with sass imports so defining this instead
				'$styles': resolve('src/scss')
			}
		},
		optimization: {
			noEmitOnErrors: true,
			splitChunks: {
				cacheGroups: {
					commons: {
					  name: 'vendor',
					  test: /[\\/]node_modules[\\/]/,
					  chunks: 'all',
					  minChunks: 2
					},
					styles: {
						name: 'styles',
						test: /\.css$/,
						chunks: 'all',
						minChunks: 2
					}
				}
			}
		},
		module: {
			rules: [
				{
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					enforce: 'pre',
					include: [resolve('src')],
					options: {
						formatter: require('eslint-friendly-formatter')
					}
				},
				{
					test: /\.s?[ac]ss$/,
					use: [
						isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
						'css-loader',
						'sass-loader'
					],
				},
				{
					test: /\.vue$/,
					loader: 'vue-loader',
				},
				{
					test: /\.js$/,
					exclude:  /node_modules(?![\\/]vue-awesome[\\/])/,
					use: {
						loader: 'babel-loader'
					}
				},
				{
					test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
					loader: 'url-loader',
					options: {
						limit: 10000,
						name: assetsPath('img/[name].[hash:7].[ext]')
					}
				},
				{
					test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
					loader: 'url-loader',
					options: {
						limit: 10000,
						name: assetsPath('fonts/[name].[hash:7].[ext]')
					}
				}
			]
		},
		plugins: [
			new VueLoaderPlugin(),
			new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': "'" + argv.mode + "'"
			})
		]
	}
	const htmlPlugin = new HtmlWebpackPlugin({
		filename: config.build.index,
		template: 'config/templates/index.html',
		inject: true,
	})
	if (argv.mode === "production") {
		webpackConfig.output = {
			publicPath: config.build.assetsPublicPath,
			path: config.dev.assetsRoot,
			filename: assetsPath('js/[name].[chunkhash].js'),
			chunkFilename: assetsPath('js/[name].[chunkhash].js')
		}

		webpackConfig.optimization.minimizer = [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true
			}),
			new OptimizeCSSAssetsPlugin({})
		];
		webpackConfig.plugins.push(
			// cleanup old files
			new CleanWebpackPlugin(['*'], {
				root:config.build.assetsRoot
			}),
			// extract all css to a single file
			new MiniCssExtractPlugin({
				// Options similar to the same options in webpackOptions.output
				// both options are optional
				filename: assetsPath('css/[name].[chunkhash].css'),
				chunkFilename: assetsPath('css/[name].[chunkhash].css'),
			}),
		);
		htmlPlugin.minify = {
					removeComments: true,
					collapseWhitespace: true,
					removeAttributeQuotes: true
					// more options:
					// https://github.com/kangax/html-minifier#options-quick-reference
				}
		if (config.build.productionGzip) {
			const CompressionWebpackPlugin = require('compression-webpack-plugin');
			webpackConfig.plugins.push(
				new CompressionWebpackPlugin({
					asset: '[path].gz[query]',
					algorithm: 'gzip',
					test: new RegExp('\\.(' + config.build.productionGzipExtensions.join('|') + ')$'),
					threshold: 10240,
					minRatio: 0.8
				})
			);
		}
	} else if (argv.mode === "development") {
		webpackConfig.output = {
			publicPath: config.build.assetsPublicPath,
			path: config.dev.assetsRoot,
			filename: assetsPath('js/[name].js'),
			chunkFilename: assetsPath('js/[name].js')
		}

		webpackConfig.watch = true;
		webpackConfig.watchOptions = { ignored: /node_modules/ };
		webpackConfig.plugins.push(
			new FriendlyErrorsPlugin()
		);
		if (argv.hot) {
			webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
			Object.keys(webpackConfig.entry).forEach(function (name) {
				webpackConfig.entry[name] = ['./config/dev-client'].concat(webpackConfig.entry[name]);
			});
		}
	}

	if (config.build.bundleAnalyzerReport) {
		const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
		webpackConfig.plugins.push(new BundleAnalyzerPlugin({analyzerHost: 'localhost', analyzerPort: 6062}));
	}

	webpackConfig.plugins.push(htmlPlugin);
	return webpackConfig;
};
