// Libraries
const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Constants
const DIST_PATH = path.join(__dirname, '../dist/')
const SRC_PATH = path.join(__dirname, '../src/')
const NODE_MODULES_PATH = path.join(__dirname, '../node_modules/')

// Export
module.exports = {
  path,
  merge,
  webpack,
  HtmlWebpackPlugin,
  DIST_PATH,
  SRC_PATH,
  NODE_MODULES_PATH,
  HTML_PLUGIN: {
    HASH: true,
    INJECT: 'body',
    COLLAPSE_WHITESPACE: true,
    CASE_SENSITIVE: true
  }
}
