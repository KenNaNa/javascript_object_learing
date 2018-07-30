/**
 * 我们让 strategy 对象从各个策略类中创建而来，
 * 这是模拟一些传统面向对象语言的实现。
 * 实际上在 JavaScript 语言中，
 * 函数也是对象，所以更简单和直接的做法是把 strategy直接定义为函数
 */

var Strategy = {
	"S":function(salary){
		return salary * 4;
	},
	"A":function(salary){
		return salary * 3;
	},
	"B":function(salary){
		return salary * 2;
	},
	"C":function(salary){
		return salary;
	}
}

var Bonus = function(strategy,level,salary){
	return strategy[ level ]( salary );
}

console.log(Bonus(Strategy,'S',20000));