const { merge } = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          output: { comments: false },
        },
      }),
    ],
  },
});
