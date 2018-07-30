var obj = new Object();
var obj1 = {};

console.log(obj);
console.log(obj1)

console.log(obj.prototype===obj1.prototype)
console.log(Object.getPrototypeOf(obj)===Object.prototype)
console.log(Object.getPrototypeOf(obj1)===Object.prototype)
//上面三个console.log()的结果为true


// 要得到一个对象，不是通过实例化类，而是找到一个对象作为原型并克隆它
//再来看看使用new 操作的
function P(name){
	this.name = name
}

P.prototype.getName = function(){
	return this.name
}

P.prototype.setName = function(name){
	this.name = name
}

console.log(P)
var p = new P('Ken')
console.log(p)


console.log(p.name)
console.log(p.getName())
p.setName('Jim')
console.log(p.getName())

console.log(Object.getPrototypeOf(p)===P.prototype)//true
console.log(Object.getPrototypeOf(p))
console.log(Object.getPrototypeOf(p)===p.__proto__)//true
console.log(P.prototype)
/**
 * 在这里 Person 并不是类，而是函数构造器，
 * JavaScript 的函数既可以作为普通函数被调用，
 * 也可以作为构造器被调用。当使用 new 运算符来调用函数时，
 * 此时的函数就是一个构造器。 用new 运算符来创建对象的过程，
 * 实际上也只是先克隆 Object.prototype 对象，再进行一些其他额
 * 外操作的过程
 */

//模仿new操作
var fn = function(){
	var a = [].shift.call(arguments);
	return a ;
}
console.log(fn('a','b'))//'a'


var objectFactory = function(){
	var obj = new Object();
	var Constructor = [].shift.call(arguments);
	//__proto__是实例化对象的原型属性，通过这个属性去找她的原型
	obj.__proto__ = Constructor.prototype;//这一步就是复制对象

	var ret = Constructor.apply(obj,arguments);

	return typeof ret === 'object' ? ret : obj;

}

console.log('----------------------------------------')
var a = objectFactory(P,'Ken');
console.log(a)

var s = new P('Ken');
console.log(s)



