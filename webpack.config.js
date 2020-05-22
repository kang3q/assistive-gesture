const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', path.resolve(__dirname, './src/js/index.ts')],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'assistive-gesture.js',
    //library: 'AssistiveGesture',
    libraryTarget: 'umd',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    inline: true,
    hot: true,
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assistive-gesture.css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      inject: 'head',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
            plugins: ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread'],
          },
        },
      },
      {
        test: /\.(s?css)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: path.resolve(__dirname, '/img/'),
        },
      },
      //{
      //  // 저장시 eslint 적용
      //  enforce: 'pre',
      //  test: /\.(js|ts)$/,
      //  exclude: /node_modules/,
      //  loader: 'eslint-loader',
      //  options: {
      //    fix: true,
      //  },
      //},
    ],
  },
}
