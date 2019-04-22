import TerserPlugin = require("terser-webpack-plugin");

const production = process.env.NODE_ENV === 'production';
const development = !production;
let allowSourceMap = development;

export = {
	configureWebpack: {

//		devtool: 'eval-source-map',

		optimization: {
			minimize: production,
			minimizer: [getTerserPlugin()],
		}

	}
};

function getTerserPlugin() {
	if (!production) {
		return new TerserPlugin({
			sourceMap: allowSourceMap,
			terserOptions: {
				output: {
					indent_level: 0,
					indent_start: 0,
					comments: false,
				},
				sourceMap: !allowSourceMap ? undefined : {
					url: "includeSources",
					includeSources: true,
				},
			},
		});
	}
	return new TerserPlugin({
		sourceMap: allowSourceMap,
		//parallel: true,
		//exclude: /regexp-cjk|regex/,
		terserOptions: {
			compress: {
				dead_code: false,
				global_defs: {},
				ecma: 8,
				inline: true,
				keep_classnames: true,
				keep_fnames: true,
				keep_infinity: true,
				passes: 2,
				pure_getters: false,
				unused: false,
				warnings: true,
			},
			sourceMap: !allowSourceMap ? undefined : {
				url: "includeSources",
				includeSources: true,
			},
			ecma: 8,
			output: {
				beautify: development,
				indent_level: 0,
				indent_start: 0,
				comments: false,
			},
			keep_classnames: true,
			keep_fnames: true,
		},
	});
}
