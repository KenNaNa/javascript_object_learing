var Singleton = function(name){
	this.name = name;
	this.instance = null;
	//判断this.instance是否存在
	//如果存在就直接返回this.instance
	//否则就创建new Singleton(name),返回出去
}

Singleton.prototype.getName = function(){
	console.log(this.name);
}
Singleton.getInstance = function(name){
	if(!this.instance){
		this.instance = new Singleton(name);
	}
	return this.instance;
}

var a = Singleton.getInstance('Ken');
var b = Singleton.getInstance('Ken');
var c = new Singleton('Ken');

console.log(a===b);//true
console.log(a===c);//false
console.log(b===c);//false



var Singleton = function(name){
	this.name = name;
}

Singleton.prototype.getName = function(){
	console.log(this.name);
}

Singleton.getInstance = (function(name){
	var instance = null;
	return function(){
		if(!instance){
			instance = new Singleton(name);
		}
		return instance;
	}
})()


var a = Singleton.getInstance('Ken');
var b = Singleton.getInstance('Ken');
var c = new Singleton('Ken');

console.log(a===b);//true
console.log(a===c);//false
console.log(b===c);//false