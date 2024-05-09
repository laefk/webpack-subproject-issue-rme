const path = require('path');

const root = __dirname;
const src  = path.resolve( root, 'src' );

module.exports = {

	mode: 'development', // <-- THIS WORKS
	// mode: 'production', // <-- THIS DOESN'T

	context: src,

	resolve: {
		preferRelative: true,
		extensions: [ '.js' ],
		modules: [
			path.resolve( src, 'modules' ),
			'node_modules',
		],
		alias: {
			'subproject': path.resolve( root, 'subproject' ),
		},
	},

	entry: {
		'app': 'app.js',
	},

	output: {
		filename: '[name].js',
		path: path.resolve( root, 'dist' ),
		publicPath: '/dist/',
		clean: true,
	},

	optimization: {
		runtimeChunk: 'single',
	},

};
