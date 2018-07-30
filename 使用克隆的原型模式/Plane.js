function Plane(){
	this.blood = 100;
	this.attackLevel = 1;
	this.defenseLevel = 1;
}

plane = new Plane();
plane.blood = 500;
plane.attackLevel = 10;
plane.defenseLevel = 7;


console.log(plane)
var clonePlane = Object.create(plane);
console.log(clonePlane);



//在不支持 Object.create 方法的浏览器中，则可以使用以下代码
Object.create = Object.create || function(obj){
	var F = function(){};
	F.prototype = obj;
	return new F();
}