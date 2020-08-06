const path = require(`path`);
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
	plugins: [
		new CompressionPlugin({
			test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
			filename(info) {
				let opFile = info.path.split('.'),
					opFileType = opFile.pop(),
					opFileName = opFile.join('.');
				return `${opFileName}.${opFileType}.gzip`;
			}
		})
	]
}