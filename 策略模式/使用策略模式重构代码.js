// 第一个版本是模仿传统面向对象语言中的实现
var performanceS = function(){};
performanceS.prototype.caculate = function(salary){
	return salary * 4;
}

var performanceA = function(){};
performanceA.prototype.caculate = function(salary){
	return salary * 3;
}

var performanceB = function(){};
performanceB.prototype.caculate = function(salary){
	return salary * 2;
}

// 接下来定义奖金类
var Bonus = function(){
	this.salary = null;//原始工资
	this.strategy = null;//绩效等级对应策略对象
}

Bonus.prototype.setSalary = function(salary){
	this.salary = salary;
}

Bonus.prototype.setStrategy = function(strategy){
	this.strategy = strategy;
}

Bonus.prototype.getBonus = function(){
	return this.strategy.caculate(this.salary);
}

var bonus = new Bonus();
bonus.setSalary(10000);
bonus.setStrategy(new performanceS());
console.log(bonus.getBonus());