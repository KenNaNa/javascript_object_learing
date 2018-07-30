//  原料不同。一个是咖啡，一个是茶，但我们可以把它们都抽象为“饮料”。
//  泡的方式不同。咖啡是冲泡，而茶叶是浸泡，我们可以把它们都抽象为“泡”。
//  加入的调料不同。一个是糖和牛奶，一个是柠檬，但我们可以把它们都抽象为“调料”。
// (1) 把水煮沸
// (2) 用沸水冲泡饮料
// (3) 把饮料倒进杯子
// (4) 加调料

// 所以，不管是冲泡还是浸泡，我们都能给它一个新的方法名称，比如说 brew()。同理，不管
// 是加糖和牛奶，还是加柠檬，我们都可以称之为 addCondiments()。
// 让我们忘记最开始创建的 Coffee 类和 Tea 类。 现在可以创建一个抽象父类来表示泡一杯饮
// 料的整个过程。不论是 Coffee，还是 Tea，都被我们用 Beverage 来表示，代码如下：
var Beverage = function(){};

Beverage.prototype.boilWater = function(){
	console.log('把水煮沸');
}

Beverage.prototype.brew = function(){};

Beverage.prototype.pourInCup = function(){};

Beverage.prototype.addCondiments = function(){};

Beverage.prototype.init = function(){
	this.boilWater();
	this.brew();
	this.pourInCup();
	this.addCondiments();
}

// 创建 Coffee 子类和 Tea 子类
var Coffee = function(){};

Coffee.prototype = new Beverage();

Coffee.prototype.boilWater = function(){
	console.log( '把水煮沸' );
};

Coffee.prototype.brewCoffeeGriends = function(){
	console.log( '用沸水冲泡咖啡' );
};

Coffee.prototype.pourInCup = function(){
	console.log( '把咖啡倒进杯子' );
};

Coffee.prototype.addSugarAndMilk = function(){
	console.log( '加糖和牛奶' );
};

Coffee.prototype.init = function(){
	this.boilWater();
	this.brewCoffeeGriends();
	this.pourInCup();
	this.addSugarAndMilk();
};

var coffee = new Coffee();
coffee.init();

// 接下来照葫芦画瓢，来创建我们的 Tea 类：

var Tea = function(){};

Tea.prototype = new Beverage();

Tea.prototype.boilWater = function(){
	console.log( '把水煮沸' );
};

Tea.prototype.steepTeaBag = function(){
	console.log( '用沸水浸泡茶叶' );
};

Tea.prototype.pourInCup = function(){
	console.log( '把茶水倒进杯子' );
};

Tea.prototype.addLemon = function(){
	console.log( '加柠檬' );
};

Tea.prototype.init = function(){
	this.boilWater();
	this.steepTeaBag();
	this.pourInCup();
	this.addLemon();
};

var tea = new Tea();
tea.init();

// 本章一直讨论的是模板方法模式，那么在上面的例子中，到底谁才是所谓的模板方法呢？答
// 案是 Beverage.prototype.init。

// Beverage.prototype.init 被称为模板方法的原因是，该方法中封装了子类的算法框架，它作
// 为一个算法的模板，指导子类以何种顺序去执行哪些方法。在 Beverage.prototype.init 方法中，
// 算法内的每一个步骤都清楚地展示在我们眼前。