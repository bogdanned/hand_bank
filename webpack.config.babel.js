import path from 'path'
import webpack from 'webpack'
import qs from 'querystring'
import reloadable from "express-reloadable"
import HtmlWebpackPlugin from "html-webpack-plugin"
import CompressionWebpackPlugin from "compression-webpack-plugin"
import AssetsPlugin from 'assets-webpack-plugin'
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')


const isDev = true,
      port = 5000

console.log(process.env.isDev == "true")

const vendor = [
  "react",
  "react-dom",
  "redux",
  "react-redux",
  "redux-first-router",
  "history",
  "recompose"
]

export default {
  devtool : isDev
    ? 'inline-source-map'
    : "hidden-source-map",
  bail : false,
  node : {
    fs: false,
    Buffer: false
  },
  entry : isDev
    ? {
      flow: [
        'babel-polyfill',
        'react-hot-loader/patch',
        'webpack/hot/only-dev-server',
        path.join(__dirname, '/src/flow/index.js')
      ],
      app: [
        'babel-polyfill',
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://localhost:${port}`,
        'webpack/hot/only-dev-server',
        path.join(__dirname, '/src/client/index.js')
      ],
      vendor
    }
    : {
      flow: [
        'babel-polyfill',
        path.join(__dirname, '/src/client/index.js')
      ],
      app: [
        'babel-polyfill',
        path.join(__dirname, '/src/client/index.js')
      ],
      vendor
    },
  output : {
    path: isDev ? '/' : path.join(__dirname, "public"),
    filename: isDev
      ? 'bundle-[name].js'
      : 'bundle-[name]-[hash].js',
    publicPath: isDev
      ? `http://localhost:${port}/`
      : `https://afternoon-gorge-49908.herokuapp.com/`
  },
  devServer : {
    hot: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "public"),
    disableHostCheck: true,
    port: 5000,
    overlay: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    setup(app) {
      let srcDir = path.resolve(__dirname, "src", "server")
      reloadable(app, {
        requireFile: path.join(srcDir, "./setup"),
        watch: srcDir,
        watchOpts: {
          ignoreInitial: true
        }
      })
    }
  },
  plugins : [
    new webpack.optimize.CommonsChunkPlugin({name: "vendor", minChunks: Infinity}),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html.ejs",
      chunks: ["vendor", "app"]
    }),
    new HtmlWebpackPlugin({
      filename: "index2.html",
      template: "index.html.ejs",
      chunks: ["flow"]
    }),
    new AssetsPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
    // do not emit compiled assets that include errors
  ],
  module : {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        loader: [
          "style-loader", 'css-loader?' + qs.stringify({modules: false, importLoaders: 1, localIdentName: '[path][name]-[local]'})
        ].join("!")
      },
      {
        test : /\.(jpg|png|svg)$/,
        use : {
          loader: "file-loader",
          options: {
            name: "[path][name].[hash].[ext]"
          }
        }
      }
    ]
  },
  resolve : {
    extensions: ['.js']
  },
  stats : "verbose"
}
