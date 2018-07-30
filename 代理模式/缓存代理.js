// 先创建一个求乘积运算的函数
var mult = function(){
	console.log('开始计算乘积');
	var a = 1;
	for(var i=0,l=arguments.length;i<l;i++){
		a = a * arguments[i];
	}
	return a;
}

console.log(mult(2,3));
console.log(mult(2,3,4));

// 现在我们加入缓存代理
var proxyMult = (function(){
	var cache = {};
	return function(){
		var args = Array.prototype.join.call(arguments,',');
		if(args in cache){
			return cache[args];
		}
		return cache[args] = mult.apply(this,arguments);

	}
})();


console.log(proxyMult(1,2,3,4));
console.log(proxyMult(1,2,3,4))

// 当我们第二次调用 proxyMult( 1, 2, 3, 4 )的时候，本体 mult 函数并没有被计算， proxyMult
// 直接返回了之前缓存好的计算结果。
// 通过增加缓存代理的方式， mult 函数可以继续专注于自身的职责——计算乘积，缓存的功能
// 是由代理对象实现的