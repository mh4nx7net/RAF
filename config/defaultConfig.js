const { context, mode, devtool } = require('./utils');

module.exports = {
  context,
  devtool,
  mode,
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js)$/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
}; /*
      {
	test: /\.(graphql|gql)$/,
	exclude: /node_modules/,
	loader: 'graphql-tag/loader',
      },
      {
	test: /[\\/]node_modules[\\/]/,
	name: 'vendor',
	chunks: 'all',
      },

*/
