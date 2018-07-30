/**
 * 我们编写一个通用的 function currying(){}， 
 * function currying(){}接受一个参数，即将要被 currying 的函数
 */

var currying = function(fn){
	var args = [];
	return function(){
		if(arguments.length===0){
			return fn.apply(this,args);
		}else{
			[].push.apply(args,arguments);
			return arguments.callee;
		}
	}
}

var cost = (function(){
	var money = 0;
	return function(){
		for(var i=0,l=arguments.length;i<l;i++){
			money += arguments[i];
		}
		return money;
	}
})()

var cost = currying(cost);

console.log('---------------------')
cost(100);
cost(200);
cost(300);
console.log(cost());