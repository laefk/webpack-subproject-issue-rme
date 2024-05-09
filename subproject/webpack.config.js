const path = require('path');

const root = __dirname;
const src  = path.resolve( root, 'src' );

module.exports = {

	mode: 'production',  // <-- THIS WORKS
	// mode: 'development', // <-- THIS DOESN'T

	context: src,

	resolve: {
		preferRelative: true,
		extensions: [ '.js' ],
		modules: [
			path.resolve( src, 'modules' ),
			'node_modules',
		],
		alias: {
			'pages': path.resolve( src, 'pages' ),
		},
	},

	entry: {
		'app': 'app.js',
	},

	output: {
		filename: '[name].js',
		library: {
			type: 'commonjs',
		},
		clean: true,
	},

	optimization: {
		runtimeChunk: 'single',
	},

};
