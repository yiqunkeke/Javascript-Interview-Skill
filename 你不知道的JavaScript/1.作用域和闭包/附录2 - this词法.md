## this 词法

尽管这个标题没有详细说明 this 机制，但是 ES6 中有一个主题用非常重要的方式将**this**同**词法作用域**联系起来了，我们会简单地讨论一下。

### 1. 箭头函数

ES6 添加了一个特殊的语法形式用于函数声明，叫作**箭头函数**。它看起来是下面这样的：

```
	var foo = a => {
		console.log(a);
	}
	
	foo(2); // 2
```

这里称作“胖箭头”的写法通常被当作*单调乏味且冗长*（挖苦）的function关键字的简写。

但是箭头函数除了让你在声明函数时少敲几次键盘以外，还有更重要的作用。简单来说，下面的代码有问题：

```
	var obj = {
		id: 'awesome',
		cool: function coolFn(){
			console.log(this.id);
		}
	};
	
	var id = "not awesome";
	
	obj.cool();  // awesome
	
	setTimeout(obj.cool, 1000); // not awesome
```

问题在于 **cool()函数丢失了同 this之间的绑定**。解决这个问题有好几种办法，但最常用的就是 var self = this; 使用起来如下：

```
	var obj = {
		count: 0,
		cool: function coolFn() {
			var self = this;
			
			if(self.count < 1) {
				setTimeout(function timer(){
					self.count++;
					console.log("awesome?");
				}, 1000)
			}
		}
	}
	
	obj.cool();
```

var self = this 这种解决方案圆满解决了理解和正确使用this绑定的问题，并且没有把问题过于复杂化，它使用的是我们非常熟悉的工具：词法作用域。self 只是一个可以通过词法作用域和闭包进行引用的标识符，不关心 this 绑定的过程中发生了什么。

人们不喜欢写冗长的东西，尤其是一遍又一遍地写。因此 ES6 的一个初衷就是帮助人们减少重复的场景，事实上包括**修复**某些习惯用法的问题， this 就是其中一个。

ES6 中的箭头函数引入了一个叫作 **this 词法**的行为：

```
	var obj = {
		count: 0,
		cool: function coolFn() {
			if(this.count < 1) {
				setTimeout(() => {
					this.count++;
					console.log("awesome?");
				}, 1000)
			}
		}
	};
	
	obj.cool(); // awesome?
```

简单来说， `箭头函数`在涉及**this 绑定**时的行为和`普通函数`的行为完全**不一致**。它放弃了所有普通 this 绑定的规则，取而代之的是**用当前的词法作用域覆盖了 this 本来的值**。（不懂）

因此，这个代码片段中的箭头函数并非是以某种不可预测的方式同所属的 this 进行了解绑定，而只是**“继承”了cool()函数的 this 绑定**（因此调用它并不会出错）

这样除了可以少写一些代码，我认为箭头函数将程序员们经常犯的一个错误给标准化了，也就是混淆了 this 绑定规则和词法作用域规则。

换句话说：为什么要自找麻烦使用 this 风格的代码模式呢？把它和词法作用域结合在一起非常让人头疼。在代码中使用两种风格其中的一种是非常自然的事情，但是不要将两种风格混在一起使用。

另一个导致箭头函数不够理想的原因是它们是匿名而非具名的。具名函数比匿名函数更可取的原因见第3章节。

在我看来，解决这个“问题”的另一个更合适的办法是正确使用和包含 this 机制。

```
	var obj = {
		count: 0,
		cool: function coolFn() {
			if(this.count < 1) {
				setTimeout(function timer() {
					this.count++; // this是安全的，因为 bind(..)
					console.log("more awesome");
				}.bind(this), 1000); // <--- look, bind()!
			}
		}
	}
	
	obj.cool(); // more awesome 
```

无论你是喜欢箭头函数中的 **this词法** 的新行为模式，还是喜欢**更靠得住的 bind()**， 都需要注意箭头函数不仅仅意味着可以少写代码。

它们之间**有意为之的不同行为**需要我们理解和掌握，才能正确地使用它们。

现在我们已经完全理解了词法作用域（还有闭包），理解 **this词法**就是小菜一碟。

