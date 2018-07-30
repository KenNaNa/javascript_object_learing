// 假设有一个乘积运算
var mult = function(){
	var sum = 1;
	for(var i=0;i<arguments.length;i++){
		sum = sum * arguments[i];
	}
	return sum;
}
/**
 * mult 函数接受一些 number 类型的参数，
 * 并返回这些参数的乘积。
 * 现在我们觉得对于那些相同的参数来说，
 * 每次都进行计算是一种浪费，
 * 我们可以加入缓存机制来提高这个函数的性能
 */
// var args = [1,1,2,3,4].join(',');
// var cache = {}
// cache[args] = args;
// console.log(cache[args]);
// console.log([1,2,3,4].join(','))
var cache = {}
var mult = function(){
	var args = Array.prototype.join.call(arguments,',');
	console.log(args);
	if(cache[args]){
		return cache[args];
	}
	var l = arguments.length;
	var a = 1;
	for(var i=0;i<l;i++){
		a = a * arguments[i];
	}

	console.log(cache[args]);
	return cache[args] = a;
}
console.log(mult(1,2,3,4));
console.log(mult(1,2,3,4));
console.log('---------')
console.log(mult(1,2,3));
console.log('--------');
console.log(mult(1,2,3));
console.log('----------')
console.log(mult(1,2,3,4));


/**
 * 我们看到 cache 这个变量仅仅在 mult 函数中被使用，
 * 与其让 cache 变量跟 mult 函数一起平行
 * 地暴露在全局作用域下，不如把它封闭在 mult 函数内部，
 * 这样可以减少页面中的全局变量，
 * 以避免这个变量在其他地方被不小心修改而引发错误
 */

var mult = (function(){
	var cache = {};
	return function(){
		var args = [].join.call(arguments,',');
		var l = arguments.length;
		var sum = 1;
		if(cache[args]){
			return cache[args];
		}
		for(var i=0;i<l;i++){
			sum = sum * arguments[i];
		}
		return cache[args] = sum;
	}

})()
console.log('----------------')
console.log(mult(1,2,3))

/**
 * 提炼函数是代码重构中的一种常见技巧。
 * 如果在一个大函数中有一些代码块能够独立出来，
 * 我们常常把这些代码块封装在独立的小函数里面。
 * 独立出来的小函数有助于代码复用，
 * 如果这些小函数有一个良好的命名，
 * 它们本身也起到了注释的作用。
 * 如果这些小函数不需要在程序的其他地方使用，
 * 最好是把它们用闭包封闭起来
 */

var mult = (function(){
	var cache = {};
	var cal = function(){
		var sum = 1;
		for(var i=0;i<arguments.length;i++){
			sum = sum * arguments[i]
		}
		return sum;
	}
	return function(){
		var args = Array.prototype.join.call(arguments,',');
		if(args in cache){
			return cache[args];
		}
		return cache[args] = cal.apply(null,arguments);
	}

})()
console.log('-------------')
console.log(mult(1,2,3,4))