var func = function(){
	var a = 1; // 退出函数后局部变量 a 将被销毁
	console.log ( a );
};
func();

var func1 = function(){
	var a = 1;
	console.log(a);
	return function(){
		a++;
		console.log(a);
	}
}

var f = func1();
f();
f();
f();
f();
f();

// 例如我们获取节点的时候
// var nodes = document.getElementsByTagName('div');
// for (var i=0;i<nodes.length;i++){
// 	nodes[i].onclick = function(){
// 		console.log(i);//此时的i输出的全是nodes.length
// 	}
// }
// 我们可以利用闭包
// for (var i=0;i<nodes.length;i++){
// 	(function(i){
// 		nodes[i].onclick = function(){
// 			console.log(i);//
// 		}
// 	})(i)
// }