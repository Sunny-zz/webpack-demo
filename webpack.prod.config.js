const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// 前提项目下安装了 webpack
// const webpack = require('webpack')
module.exports = {
  entry: './src/index.js',
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[hash:5].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // devServer: {
  //   contentBase: './dist',
  //   port: 3000,
  //   historyApiFallback: true,
  //   hot: true
  // },
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
        // use: [
        //   { loader: 'style-loader' },
        //   { loader: 'css-loader' },
        //   { loader: 'sass-loader' }
        // ],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('autoprefixer')({
                    browsers: [
                      'defaults',
                      'not ie < 11',
                      'last 2 versions',
                      '> 1%',
                      'iOS 7',
                      'last 3 iOS versions'
                    ]
                  }),
                  require('cssnano')
                ]
              }
            }
          ]
        })
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
  plugins: [
    // 启用热加载
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html'
    }),
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin({
      filename: 'css/index.css'
    })
  ]
}
