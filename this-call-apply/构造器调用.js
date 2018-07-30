/**
 * JavaScript 中没有类，
 * 但是可以从构造器中创建对象，
 * 同时也提供了 new 运算符，使得构造器看起来更像一个类。
 */
/**
 * 除了宿主提供的一些内置函数，
 * 大部分 JavaScript 函数都可以当作构造器使用。
 * 构造器的外表跟普通函数一模一样，
 * 它们的区别在于被调用的方式。
 * 当用 new 运算符调用函数时，该函数总会返回一个对象，
 * 通常情况下，构造器里的 this 就指向返回的这个对象，
 */
var MyClass = function(){
	this.name = 'Ken';
}
var obj = new MyClass();
console.log(obj.name);
console.log(obj);
console.log('-----------------------------------')
var MyClass = function(){
	this.name = 'Ken';
	return {name:'nana'};
}
var o = MyClass();
console.log(o.name);
console.log(o);


console.log('-------------------------')
var MyClass = function(){
	this.name = 'Ken';
	return 'nana';
}
var ob = new MyClass();
console.log(ob.name);
console.log(ob)