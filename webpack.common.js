// Headers
const app = require('./src/app')

// Libraries
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// Constants
const extractCSS = new ExtractTextPlugin({
  filename: '[name].css',
  disable: false
})

// Configuration
const config = {
  entry: [
    `${app.SRC_PATH}index.js`,
    `${app.SRC_PATH}styles/style.scss`
  ],
  output: {
    path: app.DIST_PATH,
    filename: 'bundle.min.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        exclude: app.NODE_MODULES_PATH,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            { loader: 'sass-loader' }
          ]
        })
      },
      {
        test: /\.js$/,
        exclude: [app.NODE_MODULES_PATH],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      {
        from: `${app.SRC_PATH}assets`,
        to: `${app.DIST_PATH}`
      }
    ]),
    extractCSS
  ]
}

// Export configuration
module.exports = config
