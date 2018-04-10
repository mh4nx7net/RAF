const LiveReloadPlugin = require('webpack-livereload-plugin');
const { mode } = require('./utils');
const webpackConfig = require('.');

module.exports = webpackConfig({
  name: 'client',
  config: {
    // externals,
    isStatic: true,
    target: 'web',
    withVendor: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          chunkGR1: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'chunkGR1',
            chunks: 'all',
          },
        },
      },
    },
    plugins: [mode === 'development' && new LiveReloadPlugin({ delay: 470 })],
  },
});

/*
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'vendor',
            chunks: 'all',
          },
        },
      },
    },
  config: {
    // externals,
    module: {
      rules: [
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader',
        },
      ],
    },
    isStatic: true,
    target: 'web',
    withVendor: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          default: false,
        },
      },
    },

  loaders: [
    {
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    },
  ],
  */
