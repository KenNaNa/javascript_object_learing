// 借用方法的第一种场景是“借用构造函数”，
// 通过这种技术，可以实现一些类似继承的效果
var A = function(name){
	this.name = name;
};
var B = function(){
	A.apply(this,arguments)
}
B.prototype.getName = function(){
	return this.name;
}

var b = new B('Ken');
console.log(b.getName());

// 借用方法的第二种运用场景跟我们的关系更加密切
/**
 * 函数的参数列表 arguments 是一个类数组对象，
 * 虽然它也有“下标”，但它并非真正的数组，
 * 所以也不能像数组一样，
 * 进行排序操作或者往集合里添加一个新的元素。
 * 这种情况下，我们常常
 * 会借用 Array.prototype 对象上的方法。
 * 比如想往 arguments 中添加一个新的元素，通常会借用
 * Array.prototype.push：
 */
(function(){
	Array.prototype.push.call(arguments,3);
	console.log(Array.from(arguments));
})(1,2)

/**
 * 想把 arguments 转成真正的数组的时候，
 * 可以借用 Array.prototype.slice 方法；
 * 想截去arguments 列表中的头一个元素时，
 * 又可以借用 Array.prototype.shift 方法。
 * 那么这种机制的内部实现原理是什么呢？
 * 我们不妨翻开 V8 的引擎源码，
 * 以 Array.prototype.push 为例
 */
// function ArrayPush() {
//  var n = TO_UINT32( this.length ); // 被 push 的对象的 length
//  var m = %_ArgumentsLength(); // push 的参数个数
//  for (var i = 0; i < m; i++) {
//  	this[ i + n ] = %_Arguments( i ); // 复制元素 (1)
//  }
//  this.length = n + m; // 修正 length 属性的值 (2)
//  return this.length;
// };
 /**
  * 通过这段代码可以看到，Array.prototype.push 
  * 实际上是一个属性复制的过程，
  * 把参数按照下标依次添加到被 push 的对象上面，
  * 顺便修改了这个对象的 length 属性。至于被修改的对象是谁，
  * 到底是数组还是类数组对象，这一点并不重要
  */
var a = {};
Array.prototype.push.call(a,'first');
console.log(a.length);
console.log(a['0']);
// 在低版本浏览器中必须有
// var a = {length:0}
/**
 * 前面我们之所以把“任意”两字加了双引号，
 * 是因为可以借用 Array.prototype.push 
 * 方法的对象还要满足以下两个条件，
 * 从 ArrayPush 函数的(1)处和(2)处也可以猜到，
 * 这个对象至少还要满足：
 * 对象本身要可以存取属性；
 * 对象的 length 属性可读写。
 * 对于第一个条件，对象本身存取属性并没有问题，
 * 但如果借用 Array.prototype.push 
 * 方法的不是一个 object 类型的数据，
 * 而是一个 number 类型的数据呢? 
 * 我们无法在 number 身上存取其他数据，
 * 那么从下面的测试代码可以发现，
 * 一个 number 类型的数据不可能借用到 Array.prototype.push 方法：
 */
var a = 1;
Array.prototype.push.call( a, 'first' );
console.log( a.length ); // 输出：undefined
console.log( a[ 0 ] ); // 输出：undefined 
/**
 * 对于第二个条件，函数的 length 
 * 属性就是一个只读的属性，
 * 表示形参的个数，我们尝试把
 * 一个函数当作 this 
 * 传入 Array.prototype.push：
 */
var func = function(){};
Array.prototype.push.call( func, 'first' ); 
console.log(func.lenth)