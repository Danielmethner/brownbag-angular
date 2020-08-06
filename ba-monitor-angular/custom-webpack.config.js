const path = require(`path`);
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
	plugins: [
		new CompressionPlugin()
	]
}