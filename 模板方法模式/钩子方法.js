// 通过模板方法模式，我们在父类中封装了子类的算法框架。这些算法框架在正常状态下是适
// 用于大多数子类的，但如果有一些特别“个性”的子类呢？比如我们在饮料类 Beverage 中封装了
// 饮料的冲泡顺序：
// (1) 把水煮沸
// (2) 用沸水冲泡饮料
// (3) 把饮料倒进杯子
// (4) 加调料
// 这 4 个冲泡饮料的步骤适用于咖啡和茶，在我们的饮料店里，根据这 4 个步骤制作出来的咖
// 啡和茶，一直顺利地提供给绝大部分客人享用。但有一些客人喝咖啡是不加调料（糖和牛奶）的。
// 既然 Beverage 作为父类，已经规定好了冲泡饮料的 4 个步骤，那么有什么办法可以让子类不受这
// 个约束呢？
// 钩子方法（hook）可以用来解决这个问题，放置钩子是隔离变化的一种常见手段。我们在父
// 类中容易变化的地方放置钩子，钩子可以有一个默认的实现，究竟要不要“挂钩”，这由子类自
// 行决定。钩子方法的返回结果决定了模板方法后面部分的执行步骤，也就是程序接下来的走向，
// 图灵社区会员 轩辕 专享
var Beverage = function(){};

Beverage.prototype.boilWater = function(){
	console.log('把水煮沸');
}


Beverage.prototype.brew = function(){
	throw new Error( '子类必须重写brew方法' );
}

Beverage.prototype.pourInCup = function(){
	throw new Error( '子类必须重写pourInCup' );
}

Beverage.prototype.addCondiments = function(){
	throw new Error('子类必须重写addCondiments方法');
}

Beverage.prototype.customerWantsCondiments = function(){
	return true;//默认需要调料
}


Beverage.prototype.init = function(){
	this.boilWater();
	this.brew();
	this.pourInCup();
	if(this.customerWantsCondiments()){
		this.addCondiments();
	}
}

var beverage = new Beverage();
beverage.init();

var CoffeeWidthHook = function(){};

CoffeeWidthHook.prototype = new Browsers();

CoffeeWidthHook.prototype.brew = function(){
	console.log( '用沸水冲泡咖啡' );
}

CoffeeWidthHook.prototype.pourInCup = function(){
	console.log('把咖啡倒进杯子');
}

CoffeeWidthHook.prototype.addCondiments = function(){
	console.log('加糖和牛奶');
}


CoffeeWidthHook.prototype.customerWantsCondiments = function(){
	return window.confirm('请问需要调料吗?');
}

var coffeeWidthHook = new CoffeeWidthHook();
coffeeWidthHook.init();