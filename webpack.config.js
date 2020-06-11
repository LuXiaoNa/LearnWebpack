const path = require('path');  //动态获取路径

module.exports = {
  // JS 执行入口文件
  entry: './main.js',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),     //resolve拼接路径，__dirname绝对路径
  },
  module:{
    rules: [
      {
        test: /\.css$/,
        //css-loader只负责将css文件加载,
        //style-loader负责将样式添加到DOM中
        //使用多个loader时，是从右向左的
        use: ['style-loader','css-loader' ]    
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
      }
    ]
  }
};
