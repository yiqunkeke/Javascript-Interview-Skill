// console.log(100)

// 1. require 使用package.json中的第三方模块，参数为模块名
// var $ = require('jquery')
// console.log($)
// var $root = $('#root')
// $root.html('<p>这是 jquery插入的文字</p>')

// 2. require 使用自定义模块，参数为路径
var aUtil = require('./a-util')
aUtil.print()