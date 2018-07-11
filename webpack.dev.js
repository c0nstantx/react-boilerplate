// Headers
const app = require('./src/app')

// Constants
const common = require('./webpack.common.js')

// Configuration
const devConfig = {
  devtool: 'eval-cheap-module-source-map',
  mode: 'development',
  devServer: {
    contentBase: app.DIST_PATH,
    compress: true,
    hot: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: process.env.PORT || 3000
  },
  plugins: [
    new app.webpack.HotModuleReplacementPlugin(),
    new app.HtmlWebpackPlugin({
      hash: app.HTML_PLUGIN.HASH,
      inject: app.HTML_PLUGIN.INJECT,
      template: app.path.join(app.SRC_PATH, 'index.html'),
      minify: {
        collapseWhitespace: app.HTML_PLUGIN.COLLAPSE_WHITESPACE,
        caseSensitive: app.HTML_PLUGIN.CASE_SENSITIVE
      }
    })
  ]
}

module.exports = app.merge(common, devConfig)
