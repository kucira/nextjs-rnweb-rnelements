const path = require('path');
const withFonts = require('next-fonts');
const withTM = require('next-transpile-modules')([
	'react-native-elements',
	'react-native-paper',
	'react-native-ratings',
	'react-native-vector-icons',
	'react-native-safe-area-view',
	'react-native-status-bar-height',
	'react-native-normalize'
]);

module.exports = withFonts(
	withTM({
		devIndicators: {
			autoPrerender: false
		},
		enableSvg: true,
		webpack: (config, { defaultLoaders }) => {
			config.resolve.alias = {
				...(config.resolve.alias || {}),
				// Transform all direct `react-native` imports to `react-native-web`
				'react-native$': 'react-native-web'
			};
			config.resolve.extensions.push('.web.ts', '.web.tsx', '.ts', '.tsx', '.web.js', '.web.jsx', '.js', '.jsx');
			config.resolve.modules = [ ...config.resolve.modules, path.resolve(__dirname, 'node_modules') ];
			config.resolve.symlinks = false;
			config.module.rules.push(
				{
					test: /\.(jpe?g|png|gif|svg)$/i,
					use: [ 'url-loader?limit=10000', 'img-loader' ]
				},
				{
					test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
					exclude: /node_modules/,
					loader: 'file-loader'
				},
				{
					test: /\.(woff|woff2)$/,
					exclude: /node_modules/,
					loader: 'url-loader?prefix=font/&limit=5000'
				},
				{
					test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
					exclude: /node_modules/,
					loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
					include: path.resolve(__dirname, 'node_modules/react-native-vector-icons')
				}
			);

			return config;
		}
	})
);
