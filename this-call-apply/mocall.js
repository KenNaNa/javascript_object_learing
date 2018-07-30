// 举个例子
var foo = {
	value : 1,
}
function bar(){
	console.log(this.value);
}
bar.call(foo)
// 上面可以改造成下面这样
// 模拟实现一
var foo = {
	value : 1,
	bar : function(){
		console.log(this.value);
	}
}
foo.bar();
delete foo.bar
// 但是foo对象多出了一个bar属性
// 先添加一个bar属性，foo.fn = bar
// 当然我们可以删除
// delete foo.bar

// 封装模拟call()函数
// 只有一个参数时
Function.prototype.mocall = function(contxt){
	console.log(this instanceof Function);//true
	console.log(this);//[Function:bar]
	//向传进来的对象添加属性
	contxt.fn = this;
	// 在执行这个属性
	contxt.fn();
	// 最后删除这个属性
	delete contxt.fn;
}

bar.mocall(foo);

// 第二部模拟call
// 当传入多个参数时
console.log('----------------')
Function.prototype.mocalls = function(contxt){
	var args = [];
	// var arr;
	contxt.fn = this;
	// 将除第一个参数外的参数取出来放进args当作函数参数
	for(var i=1,len=arguments.length;i<len;i++){
		args.push(arguments[i]);
	}
	// arr = [].slice.call(arguments,1);
	// eval('contxt.fn('+args+')');
	contxt.fn(...args);
	delete contxt.fn;
}
var foo = {
	value:1,
}
function bar (name,age){
	console.log(name);
	console.log(age);
	console.log(this.value);
}

bar.mocalls(foo,'Ken','18');

// 当this传入null,视为传入window
// 而且函数有返回值
Function.prototype.mocalls1 = function(contxt){
	var contxt = contxt || window;
	var args;
	args = [].slice.call(arguments,1);
	contxt.fn = this;
	var results = contxt.fn(...args);
	delete contxt.fn;
	return results;
}

var value = 2;
var obj = {
	value : 1,
}

function bar(name,age){
	console.log(this.value);
	return {
		value : this.value,
		name : name,
		age : age
	}
}

bar.mocalls1(null);
console.log(bar.mocalls1(obj,'Ken',18));