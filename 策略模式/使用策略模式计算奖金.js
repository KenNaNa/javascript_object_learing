// 使用策略模式计算奖金
// 就需要接收两个参数：员工的工资数额和他的绩效考核等级
var caculateBonus = function(performanceLevel,salary){
	if(performanceLevel==='S'){
		return salary * 4;
	}
	if(performanceLevel==='A'){
		return salary * 3;
	}
	if(performanceLevel==='B'){
		return salary * 2;
	}
}

caculateBonus('B',2000);
caculateBonus('S',600);

// 这样写的代码缺乏弹性
// 我们使用组合函数重构代码
var performanceS = function(salary){
	return salary * 4;
}

var performanceA = function(salary){
	return salary * 3;
}

var performanceB = function(salary){
	return salary * 2;
}

var caculateBonus = function(performanceLevel,salary){
	if(performanceLevel==='S'){
		return performanceS(salary);
	}
	if(performanceLevel==='A'){
		return performanceA(salary);
	}
	if(performanceLevel==='B'){
		return performanceB(salary);
	}
}


caculateBonus('A',20000);