var People = function(name){
	this.name = name;
	this.instance = null;
}
People.prototype.getName = function(){
	return this.name;
}
People.getInstance = function(name){
	if(!this.instance){
		this.instance = new People(name);
	}
	return this.instance;
}
var p = new People('Ken');
console.log('这是一个实例化类'+p);
console.log(p.getName())