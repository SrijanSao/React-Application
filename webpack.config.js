var path = require('path');
const dir_styles = path.resolve(__dirname, 'src/styles');
const dir_static = path.resolve(__dirname, 'static');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');



module.exports = {
  entry: "./renderer.js",
  output: {
    filename: "./public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, 
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.s?css$/, 
   loader: 'style-loader!css-loader!sass-loader!resolve-url-loader!sass-loader?sourceMap'
      },
  // { // regular css files
  //       test: /\.css$/,
  //       loader: ExtractTextPlugin.extract({
  //         loader: 'css-loader?importLoaders=1',
  //       }),
  //     },
  //     { // sass / scss loader for webpack
  //       test: /\.(sass|scss)$/,
  //       loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader', 'sass-loader?sourceMap'])
  //     },
       {
            loader: 'file-loader?name=./static/fonts/[name].[ext]',
            test: /\.(otf|eot|ttf|woff|woff2)$/
        },
         {
            loader: 'file-loader?name=./static/images/[name].[ext]',
            test: /\.jpg$/,
        },
        
  
     
      
        
    ]
  },
  // plugins: [
  //       // new ExtractTextPlugin("./static/main.css"),
  //       new ExtractTextPlugin({
  //         filename: "./static/main.css",
  //         allChunks: true,
  //       }),
  //   ],
   // externals: [nodeExternals()]
  

}