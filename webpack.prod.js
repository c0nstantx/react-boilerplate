// Headers
const app = require('./src/app')

// Libraries
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

// Constants
const common = require('./webpack.common.js')

// Configuration
const prodConfig = {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: false,
        extractComments: true
      })
    ]
  },
  plugins: [
    new app.webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new app.HtmlWebpackPlugin({
      hash: app.HTML_PLUGIN.HASH,
      inject: app.HTML_PLUGIN.INJECT,
      template: app.path.join(app.SRC_PATH, 'index_production.html'),
      minify: {
        collapseWhitespace: app.HTML_PLUGIN.COLLAPSE_WHITESPACE,
        caseSensitive: app.HTML_PLUGIN.CASE_SENSITIVE
      }
    }),
    // Compression plugin generates compressed version of script
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
}

module.exports = app.merge(common, prodConfig)
