const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./client/public/index.html", 
  filename: "./index.html",
  favicon: './client/public/favicon.ico',//favicon路徑
  minify: { //壓縮html
    removeComments: true, //移除html註釋
    collapseWhitespace: false //刪除空白和換行
  }
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
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options:{
              "presets": ["@babel/preset-env", "@babel/preset-react"],
              "plugins": ["@babel/transform-runtime","@babel/plugin-proposal-class-properties"]
            }
        }
    },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        loader: "file-loader",
        options: { name: '[path][name].[ext]' }
      }
    ]
  }
};