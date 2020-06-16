// 通过 CommonJS 规范导入 show 函数
const show = require('./show.js');
// 执行 show 函数
show('Webpack');

//依赖css文件
require('./css/normal.css')

//依赖less文件
// require('./css/special.less')
// document.write('<h2>你好啊</h2>')

// 使用Vue进行开发
import Vue from 'vue'

const app = new Vue({
    el:"#app",
    data:{
        message:'hello word'
    }
})