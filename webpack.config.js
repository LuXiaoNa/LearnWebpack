const path = require('path');  //动态获取路径

module.exports = {
  // JS 执行入口文件
  entry: './main.js',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),     //resolve拼接路径，__dirname绝对路径
    publicPath:'dist/'    //查找图片
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
      // {
      //   test: /\.less$/,
      //   use: [{
      //       loader: "style-loader" // creates style nodes from JS strings
      //   }, {
      //       loader: "css-loader" // translates CSS into CommonJS
      //   }, {
      //       loader: "less-loader",options: { // compiles Less to CSS
      //         strictMath: true,
      //         noIeCompat: true
      //     } 
      //   }]
      // },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当加载的图片，小于limit时，会将图片编译成base64字符串形式
              //当加载的图片，大于limit时，需要使用file-loader模块进行加载
              limit: 13000,
              name:'img/[name].[hash:8].[ext]'    //更改dist文件夹下图片的名字
            } 
          }
        ]
      },
      {
        //配置babel 让浏览器兼容
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,    
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  // resolve:{
  //   //alias别名,解决出现runtime-only的问题
  //   alias:{
  //      'vue$':'vue/dist/vue.esm.js'  
  //   }
  // }
};
