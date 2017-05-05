var LiveReloadPlugin = require('webpack-livereload-plugin');
var LiveReloadPluginConfig = new LiveReloadPlugin()


module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    path: __dirname,
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loaders: "babel-loader"
      }
    ]
  },
  plugins: [LiveReloadPluginConfig],
  {
    devtool: "#eval"
  }
}
