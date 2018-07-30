// apply传递两个参数，一个是上下文this,另一个是数组
// call传递两个参数，一个是上下文this,另一个是不定参
var fn = function(a,b,c){
	console.log([a,b,c]);
}

fn.apply(null,[1,2,3]);
fn.call(null,1,2,3);
// 当第一个参数传入null时 ，函数体内的this对象此时传入
// 宿主对象window
var fn = function(){
	console.log(this === window);//在node.js中，
}
fn()

// 在严格模式下
var fn = function(){
	'use strict';
	console.log(this===null);//true
}
fn()

console.log(Math.max.apply(null,[1,2,3,4,5]));

// call-apply的用途
// 1. 改变 this 指向
var obj1 = {
	name : 'Ken'
}
var obj2 = {
	name : 'nana'
}
// window = global;
window.name = 'window';
var fnc = function(){
	console.log(this.name);
}

fnc();//window
fnc.call(obj1);//Ken
fnc.apply(obj2);//nana
// 只在运行期间改变上下文的执行环境this对象的指向
// 
document.getElementById('div1').onclick = function(){
	alert(this.id);//div1
	var fnc = function(){
		alert(this.id);//undefined
	}
	fnc();
}

// 下面使用call来改变this的指向
document.getElementById('div1').onclick = function(){
	alert(this.id);//div1
	var fnc = function(){
		alert(this.id);//undefined
		// this->window
	}
	// this->div1
	fnc.call(this);
}

// 
// var getid = document.getElementById
// getid.apply(document,arguments);
document.getElementById = (function(fnc){
	return function(){
		fnc.apply(document,arguments);
	}
})(document.getElementById)


var getid = document.getElementById;
console.log(getid('div1'));