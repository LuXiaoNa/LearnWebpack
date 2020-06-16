// 通过 CommonJS 规范导入 show 函数
const show = require('./show.js');
// 执行 show 函数
show('Webpack');

//依赖css文件
require('./css/normal.css')

//依赖less文件
// require('./css/special.less')
// document.write('<h2>你好啊</h2>')