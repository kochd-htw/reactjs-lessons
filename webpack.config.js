import path from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'

import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin'

const require = createRequire(import.meta.url)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const pkg = require('./package.json')

const plugins = [
  new webpack.EnvironmentPlugin(['NODE_ENV']),
  new webpack.ProvidePlugin({
    process: 'process/browser.js',
    Buffer: ['buffer', 'Buffer']
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env.TARGET': JSON.stringify('web'),
    TARGET: JSON.stringify('web')
  }),
  new HtmlWebpackPlugin({
    inject: 'body',
    publicPath: '/'
  }),
  new MiniCssExtractPlugin(),
  new FaviconsWebpackPlugin({
    inject: true,
    logo: './src/assets/favicon.svg',
    prefix: 'favicons/',
    favicons: {
      appName: pkg.appName,
      appDescription: pkg.description,
      developerName: pkg.author,
      developerURL: null, // prevent retrieving from the nearest package.json
      background: '#ddd',
      theme_color: '#333',
      icons: {
        // android: true, // Create Android homescreen icon. `boolean` or `{ offset, background }` or an array of sources
        // appleIcon: true, // Create Apple touch icons. `boolean` or `{ offset, background }` or an array of sources
        // appleStartup: true, // Create Apple startup images. `boolean` or `{ offset, background }` or an array of sources
        favicons: true, // Create regular favicons. `boolean` or `{ offset, background }` or an array of sources
        // windows: true // Create Windows 8 tile icons. `boolean` or `{ offset, background }` or an array of sources
      }
    }
  })
]

export default {
  entry: {
    app: './src/react/App.jsx',
  },
  output: {
    filename: 'app.[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    assetModuleFilename: 'assets/[contenthash].[ext]'
  },
  devtool: (
    process.env.NODE_ENV !== 'production'
      ? 'eval-source-map'
      : false
  ),
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.md$/,
        use: 'raw-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[contenthash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/i,
        type: "asset"
      },
      {
        test: /\.(pdf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              "imagemin-gifsicle",
              "imagemin-mozjpeg",
              "imagemin-pngquant",
              "imagemin-svgo"
            ]
          }
        }
      })
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify")
    }
  },
  target: 'web',
  plugins
}
