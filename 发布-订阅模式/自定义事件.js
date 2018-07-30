//  首先要指定好谁充当发布者（比如售楼处）；
//  然后给发布者添加一个缓存列表，用于存放回调函数以便通知订阅者（售楼处的花名册）；
//  最后发布消息的时候，发布者会遍历这个缓存列表，依次触发里面存放的订阅者回调函
// 数（遍历花名册，挨个发短信）。
var salesOffices = {};//// 定义售楼处

salesOffices.clientList = [];//缓存列表，存放订阅者的回调函数

salesOffices.listen = function(fn){//增加订阅者
	this.clientList.push(fn);//订阅的消息添加进缓存列表
}


salesOffices.trigger = function(){
	for(var i=0,fn;fn=this.clientList[i++];){
		fn.apply(this,arguments);//// arguments 是发布消息时带上的参数
	}
}


salesOffices.listen( function( price, squareMeter ){ // 小明订阅消息
	console.log( '价格= ' + price );
	console.log( 'squareMeter= ' + squareMeter );
});

salesOffices.listen( function( price, squareMeter ){ // 小红订阅消息
	console.log( '价格= ' + price );
	console.log( 'squareMeter= ' + squareMeter );
});

salesOffices.trigger( 2000000, 88 ); // 输出： 200 万， 88 平方米
salesOffices.trigger( 3000000, 110 ); // 输出： 300 万， 110 平方米