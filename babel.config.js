module.exports = {
	presets: [ 'next/babel' ],
	plugins: [
		[ 'react-native-web', { commonjs: true } ],
		[
			'@babel/plugin-transform-runtime',
			{
				absoluteRuntime: false,
				corejs: false,
				helpers: true,
				regenerator: true,
				useESModules: true,
				version: '7.0.0-beta.0'
			}
		],
		'@babel/plugin-proposal-object-rest-spread',
		'@babel/plugin-transform-async-to-generator',
		'@babel/plugin-proposal-class-properties'
	]
};
