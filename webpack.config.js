var path = require('path');
var webpack = require('webpack');
var sassLoader = 'style!css!sass?sourceMap=true&sourceMapContents=true';//这里好像做了个集成。。

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  //页面入口文件配置
  entry: [
    'react-hot-loader/patch', //added after upgrade
    'webpack-hot-middleware/client',
    './src/app.js',
  ],
  //入口文件输出配置
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    chunkFilename: "[name].js",
    publicPath: '/static/',
  },
  //加载器配置
  module: {
    loaders: [
      //.js 文件使用 jsx-loader 来编译处理
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: 'babel-loader', //added after upgrade
      },
      //.css 文件使用 sassLoader 来处理
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'css'),
        ],
        loader: sassLoader
      },
      //.scss 文件使用 sassLoader 来编译处理
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, 'css'),
        ],
        loader: sassLoader
      }, {
        test: /\.less$/,
        //exclude: /node_modules/,
        loader: "style!css!less",
        //loader: ExtractTextPlugin.extract('style', 'css!less')
      }, {
        test: /\.(png|jpg|jpeg|gif)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=10000&name=images/[name].[hash].[ext]'
      }, {
        test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,
        exclude: /node_modules/,
        loader: 'url?prefix=font/&limit=10000&name=font/[name].[ext]'
      }
    ],
  },
  //其它解决方案配置
  resolve: {
    //模块别名定义，方便后续直接引用别名，无须多写长长的地址
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react'),
    },
    //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    extensions: ['', '.js', '.jsx', '.scss', '.css', '.less', '.png', '.jpg'],
  },
  //插件项
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
};