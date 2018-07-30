var monthlyCost = 0;
var cost = function(money){
	monthlyCost += money;
	return monthlyCost;
}

console.log(cost(100));
console.log(cost(300));
console.log(cost(700));

// 现在我们不需要每天计算一次
// 我们要等到30天后计算出总值
var cost = (function(){
	var args = [];
	return function(){
		if(arguments.length===0){//当函数参数为空时，我们为其求值
			var money = 0;
			for(var i=0,length=args.length;i<length;i++){
				money += args[i];
			}
			return money;
		}else{//否则就将传进去的参数添加进数组
			[].push.apply(args,arguments);
		}
	}
})()
console.log('------------------------------')
cost(100);
cost(200);
cost(190);
console.log(cost());

// 自己的想法
// 可以用一个字面量对象
// 记住每一天的日期对应的消费
// 第一个参数是指定日期数
// 之后的参数为当天的消费值
var cost = (function(){
	var obj = {};
	return function(){
		
		if(arguments.length){//有传参数的时候
			if(arguments.length<2){
				return null;
			}else{
				var day = [].shift.call(arguments);//shift()会改变数组的长度
				// console.log(arguments)
				var mon = 0;
				for(var i=0,l=arguments.length;i<l;i++){
					 mon += arguments[i];
					 // console.log('mon:'+mon);
				}
				obj[day] = mon;
				console.log(obj)
			}
		}else{
			var money = 0;
			for(var key in obj){
				money += obj[key];
			}
		}
		return {
			money:money,
			obj:obj,
		}
	}
})()

cost(1,100);
cost(2,200);
cost(3,100,200);
var obj = cost();
console.log(obj.money);
console.log(obj.obj["1"]);