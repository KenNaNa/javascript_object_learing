window.name = 'globalname';//在Nodejs中window===global
var getName = function(){
	return this.name;//此时的this是指向window的
};

console.log(this.getName());

var myobj = {
	name : 'Ken',
	getName(){
		return this.name;
	}
}
var getname = myobj.getName;
console.log(getname());