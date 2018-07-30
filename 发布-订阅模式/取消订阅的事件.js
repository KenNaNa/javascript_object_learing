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
	},
	remove(key,fn){
		var fns = this.clientList[key];
		// 如果key对应的消息没人订阅，直接退回
		if(!fns){
			return false;
		}
		if(!fn){// 如果没有传入具体的回调函数，表示需要取消 key 对应消息的所有订阅
			fns && ( fns.length = 0 );
		}else{
			for(var l=fns.length-1;l>=0;l--){// 反向遍历订阅的回调函数列表
				var _fn = fns[l];
				if(_fn===fn){
					fns.splice(l,1);// 删除订阅者的回调函数
				}
			}
		}
	}
}

// 再定义一个installEvent函数，这个函数可以给所有的对象动态安装发布-订阅功能
var installEvent = function(obj){
	for(var i in event){
		obj[i] = event[i];
	}
}

var salesOffices = {};
installEvent( salesOffices );

salesOffices.listen( 'squareMeter88', fn1 = function( price ){ // 小明订阅消息
	console.log( '价格= ' + price );
});

salesOffices.listen( 'squareMeter88', fn2 = function( price ){ // 小红订阅消息
	console.log( '价格= ' + price );
});
salesOffices.remove( 'squareMeter88', fn1 ); // 删除小明的订阅
salesOffices.trigger( 'squareMeter88', 2000000 ); // 输出： 2000000