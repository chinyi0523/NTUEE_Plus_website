const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./client/public/index.html", 
  filename: "./index.html"
});
module.exports = {
  entry: "./client/src/index.js",
  output: { 
    path: path.join(__dirname, 'dist'),
    filename: "[name].js",
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [htmlPlugin],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        loader: "file-loader",
        options: { name: '/static/[name].[ext]' }
      }
    ]
  }
};