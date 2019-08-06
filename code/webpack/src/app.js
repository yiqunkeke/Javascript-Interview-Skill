// console.log(100)

// 1. require 使用package.json中的第三方模块，参数为模块名
// var $ = require('jquery')
// console.log($)
// var $root = $('#root')
// $root.html('<p>这是 jquery插入的文字</p>')

// 2. require 使用自定义模块，参数为路径
// var aUtil = require('./a-util')
// aUtil.print()

// 3. CommonJS模块的加载机制是，输入的是被输出的值的拷贝。
// 也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。
// var counter = require('./m1').counter
// var incCounter = require('./m1').incCounter
// console.log(counter)  // 3
// incCounter()
// console.log(counter) // 3

// 4.服务端实现
let uniq = require('uniq')  //  npm i uniq --save 用于数组去重
let module1 = require('./m1') 
let module2 = require('./m2')   
let module3 = require('./m3')   

module1.foo() //module1
module2() // module2
module3.foo() // foo() module3
console.log(uniq(module3.arr)) //[1, 2, 3]
