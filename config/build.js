var ora = require('ora');
var rm = require('rimraf');
var path = require('path');
var chalk = require('chalk');
var webpack = require('webpack');
var config = require('../config');
var webpackConfig = require('./webpack.conf')({}, { mode: "production" });

var spinner = ora('building for production...');
// set production mode
spinner.start();

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
	if (err) throw err;
	webpack(webpackConfig, function (err, stats) {
		spinner.stop();
		if (err) throw err;
		process.stdout.write(stats.toString({
			colors: true,
			progress: true,
			profile: true,
			reasons: true,
			errors: true,
			modules: false,
			children: false,
			chunks: false,
			chunkModules: false,
			chunkOrigins: false,
			entrypoints: false,
			usedExports: false,
			depth: false
		}) + '\n\n');
		console.log(chalk.cyan('  Build complete.\n'));
		console.log(chalk.yellow(
			'  Tip: built files are meant to be served over an HTTP server.\n' +
				'  Opening index.html over file:// won\'t work.\n'
		));
	});
});
