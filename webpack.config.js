const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
// const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const chalk = require('chalk');

// start message
console.log(chalk.bgWhite.black(' ☘️.  START ☘️ ', ' '));

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production'
  const isDev = !isProd

  const filename = (ext) =>
    isProd ? `[name].[contenthash].bundle.${ext}` : `[name].bundle.${ext}`;

  console.log(`isProd: ${isProd}`)
  console.log(`isDev: ${isDev}`)

  const plugins = () => {
    const base = [
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src', 'img', 'favicon'),
            to: path.resolve(__dirname, 'dist')
          },
          {
            from: path.resolve(__dirname, 'src', 'img'),
            to: path.resolve(__dirname, 'dist', 'img')
          }
        ],
      }),
      new MiniCssExtractPlugin({
        filename: filename('css'),
      }),
      // new SpriteLoaderPlugin(),
    ]
    if (isDev) {
      base.push(new ESLintPlugin())
    }
    return base
  }

  return {
    target: 'web',
    context: path.resolve(__dirname, 'src'),
    entry: {
      main: ['@babel/polyfill', './js/script.js'],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: filename('js'),
      clean: true
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@core': path.resolve(__dirname, 'core')
      }
    },
    stats: {
      all: undefined,
      hash: true,
      modules: false,
      colors: true,
      entrypoints: false,
      assets: false,
    },
    plugins: plugins(),
    devServer: {
      port: 3000,
      open: true,
      hot: true,
      watchFiles: './',
    },
    devtool: isDev ? 'source-map' : false,
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        // {
        //   test: /\.svg$/,
        //   loader: 'svg-sprite-loader',
        //   options: {
        //     extract: true,
        //     outputPath: './sprites/',
        //     publicPath: './sprites/'
        //   }
        // }
      ],
    },
  }
}
