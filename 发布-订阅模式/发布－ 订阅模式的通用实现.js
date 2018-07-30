// 我们把发布-订阅的功能提取出来
// 放在一个对象里面
var event = {
	clientList:[],
	listen:function(key,fn){
		if(!this.clientList[key]){
			this.clientList[key] = [];
		}
		this.clientList[key].push(fn);
	},
	trigger(){
		var key = Array.prototype.shift.call(arguments);
		var fns = this.clientList[key];
		if(!fns||fns.length===0){
			return false;
		}
		for(var i=0,fn;fn=this.clientList[key][i++];){
			fn.apply(this,arguments);
		}
	}
}

// 再定义一个installEvent函数，这个函数可以给所有的对象动态安装发布-订阅功能
var installEvent = function(obj){
	for(var i in event){
		obj[i] = event[i];
	}
}

// 测试
var salesOffices = {};
installEvent( salesOffices );

salesOffices.listen( 'squareMeter88', function( price ){ // 小明订阅消息
	console.log( '价格= ' + price );
});
salesOffices.listen( 'squareMeter100', function( price ){ // 小红订阅消息
	console.log( '价格= ' + price );
});
salesOffices.trigger( 'squareMeter88', 2000000 ); // 输出： 2000000
salesOffices.trigger( 'squareMeter100', 3000000 ); // 输出： 3000000