var obj1 = {
	name : 'Ken',
}

var obj2 = {
	getName:function(){
		console.log(this.name);
	}
}

obj2.getName();
obj2.getName.call(obj1);
obj2.getName.apply(obj1);


(function(){
	Array.prototype.push(arguments,4);
	console.log(arguments)
})(1,2,3)


// 现在我们就来实现上面的push
Function.prototype.uncurrying = function(){
	var _self = this;//保存原来的函数，
	return function(){
		var obj = Array.prototype.shift.call(arguments);//取出arguments的第一个参数，arguments长度简短，

		return _self.apply(obj,arguments);//执行原来的函数

	}
}

var push = Array.prototype.push.uncurrying();
(function(){
	push(arguments,5);
	console.log(arguments);
})(1,2,3,4)

// 我们还可以一次性地把 Array.prototype 上的方法“复制”到 array 对象上，同样这些方法可
// 操作的对象也不仅仅只是 array 对象
for(var i=0,fn,ary=['push','shift','forEach'];fn=ary[i++];){
	Array[fn] = Array.prototype[fn].uncurrying();
}

var obj = {
	"length":3,
	"0":1,
	"1":2,
	"2":3,
}
console.log(Array.push);
Array.push(obj,4);
console.log(obj.length);

var first = Array.shift(obj);
console.log(first);

console.log(obj);


Array.forEach(obj,function(i,n){
	console.log(`${i} ====> ${n}`);
})


// call,apply方法也可zd以uncurrying
var call = Function.prototype.call.uncurrying();

var fn = function(name){
	console.log(name);
}

call(fn,'Ken');
call(fn,window,'Ken');


var apply = Function.prototype.apply.uncurrying();

var obj = {name:"Ken"};
var fn = function(name){
	console.log(this.name);

	console.log(arguments);
}
apply(fn,obj,[1,2,3]);


// 
Function.prototype.uncurrying = function () {
	var self = this; // self 此时是 Array.prototype.push
	return function() {
		var obj = Array.prototype.shift.call( arguments );
		// obj 是{
		// "length": 1,
		// "0": 1
		// }
		// arguments 对象的第一个元素被截去，剩下[2]
		return self.apply( obj, arguments );
		// 相当于 Array.prototype.push.apply( obj, 2 )
	};
};
var push = Array.prototype.push.uncurrying();
var obj = {
	"length": 1,
	"0": 1
};
push( obj, 2 );
console.log( obj ); // 输出： {0: 1, 1: 2, length: 2}


// 
Function.prototype.uncurrying = function(){
	var self = this;
	return function(){
		return Function.prototype.call.apply( self, arguments );
	}
};