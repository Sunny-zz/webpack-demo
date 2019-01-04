const path = require('path')
// 前提项目下安装了 webpack
const webpack = require('webpack')
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist',
    port: 3000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  // 启用热加载
  plugins: [new webpack.HotModuleReplacementPlugin()]
}
