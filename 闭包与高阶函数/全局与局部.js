var a = 2;
var func = function(){
	var a;
	console.log(a);
	a = 1;
	console.log(a);
}
func();
console.log(a);
var func1 = function(){
	var b = 2;
	var func2 = function(){
		var c = 3;
		console.log(b);
		console.log(a);
	}
	func2();
	// console.log(c);报错
}
func1();

