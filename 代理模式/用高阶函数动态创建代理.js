// 通过传入高阶函数这种更加灵活的方式，可以为各种计算方法创建缓存代理
/**************** 计算乘积 *****************/
var mult = function(){
	var args = arguments;
	var a = 1;
	var l = args.length;
	for(var i=0;i<l;i++){
		a = a * args[i];
	}
	return a;
}

/**************** 计算加和 *****************/

var plus = function(){
	var args = arguments;
	var s = 0;
	var l = args.length;
	for(var i=0;i<l;i++){
		s = s + args[i];
	}
	return s;
}

/**************** 创建缓存代理的工厂 *****************/
var createProxyFactory = function(fn){
	var cache = {};
	return function(){
		var args = Array.prototype.join.call(arguments,',');
		if(args in  cache){
			return cache[args];
		}
		return cache[args] = fn.apply(this,arguments);
	}
}


var proxy = createProxyFactory(mult);
console.log(proxy(1,2,3,4,5));


var proxy = createProxyFactory(plus);
console.log(proxy(1,2,3,4,5));