var salesOffices = {};
salesOffices.clientList = {};//缓存列表，存储回调函数

salesOffices.listen = function(key,fn){//订阅消息
	if(!this.clientList[key]){//查找属性键，是否被订阅过
		this.clientList[key] = [];// 如果还没有订阅过此类消息，给该类消息创建一个缓存列表
	}
	this.clientList[ key ].push( fn ); // 订阅的消息添加进消息缓存列表
}

salesOffices.trigger = function(){//发布消息
	var key = Array.prototype.shift.call(arguments);//// 取出消息类型
	var fns = this.clientList[key];//取出该消息对应的回调函数集合


	if(!fns || fns.length===0){
		return false;
	}

	for(var i=0,fn;fn=this.clientList[key][i++];){
		fn.apply(this,arguments);// arguments 是发布消息时附送的参数
	}
}

salesOffices.listen( 'squareMeter88', function( price ){ // 小明订阅 88 平方米房子的消息
	console.log( '价格= ' + price ); // 输出： 2000000
});
salesOffices.listen( 'squareMeter110', function( price ){ // 小红订阅 110 平方米房子的消息
	console.log( '价格= ' + price ); // 输出： 3000000
});
salesOffices.trigger( 'squareMeter88', 2000000 ); // 发布 88 平方米房子的价格
salesOffices.trigger( 'squareMeter110', 3000000 ); // 发布 110 平方米房子的价格