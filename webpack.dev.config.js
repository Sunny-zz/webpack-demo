const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
// 前提项目下安装了 webpack
const webpack = require('webpack')
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: '[hash:5].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist',
    port: 3000,
    historyApiFallback: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
          // babel 的配置可以直接写在下面也可以写到 .babelrc 文件内
          // options: {
          //   presets: ['@babel/preset-env', '@babel/preset-react'],
          //   plugins: ['@babel/plugin-proposal-class-properties',"react-hot-loader/babel"]
          // }
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      }
    ]
  },
  // 启用热加载
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html'
    })
  ]
}
