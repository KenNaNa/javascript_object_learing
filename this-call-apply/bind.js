
var obj = {
	name : 'Ken',
}
var fnc = function(){
	console.log(this.name);
}

fnc.bind(obj)();
var arr = [1,2,3,4];
var args = [].slice.call(arr,1);
console.log(args)

