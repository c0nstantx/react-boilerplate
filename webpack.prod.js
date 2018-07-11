// Headers
const app = require('./src/app')

// Libraries
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

// Constants
const common = require('./webpack.common.js')

// Configuration
const prodConfig = {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: false,
        extractComments: false
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
    })
  ]
}

module.exports = app.merge(common, prodConfig)
