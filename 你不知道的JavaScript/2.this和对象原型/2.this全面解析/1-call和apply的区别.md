## call 和 apply的区别和用途

ECMAScript 3 给 Function的原型定义了两个方法，它们是Function.prototype.call 和 Function.prototype.apply。

-----------------------------

### 1.call和apply的区别

* Function.prototype.call 和 Function.prototype.apply都是非常常用的方法。它们的作用一模一样，区别仅在于传入参数的形式不同。

**apply** 接受两个参数，第一个参数指定了函数体内 this 对象的指向，

第二个参数为一个带下标的集合，这个集合可以为数组，也可以为类数组，apply方法把这个集合中的元素作为参数传递给被调用的函数。

```
	var func = function (a, b, c) {
		console.log(a, b, c);
	}
	
	func.apply(null, [1, 2, 3]); // 1,2,3
```

**call**传入的参数数量不固定，跟apply相同的是，第一个参数也是代表函数体内this的指向，从第二个参数开始往后，每个参数依次传入被调用的函数

```
	var func = function(a, b, c) {
		console.log(a, b, c);
	};
	
	func.call(null, 1, 2, 3); // 1,2,3
```

