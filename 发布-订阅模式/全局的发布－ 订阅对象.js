//  我们给每个发布者对象都添加了 listen 和 trigger 方法，以及一个缓存列表 clientList，
// 这其实是一种资源浪费。
//  小明跟售楼处对象还是存在一定的耦合性，小明至少要知道售楼处对象的名字是
// salesOffices，才能顺利的订阅到事件。
salesOffices.listen('squareMeter100',function(price){
	console.log(price);
})

// 如果小明还关心 300 平方米的房子，而这套房子的卖家是 salesOffices2，这意味着小明要开
// 始订阅 salesOffices2 对象
salesOffices2.listen('squareMeter300',function(price){
	console.log(price);
})


// 其实在现实中，买房子未必要亲自去售楼处，我们只要把订阅的请求交给中介公司，而各大
// 房产公司也只需要通过中介公司来发布房子信息。这样一来，我们不用关心消息是来自哪个房产
// 公司，我们在意的是能否顺利收到消息。当然，为了保证订阅者和发布者能顺利通信，订阅者和
// 发布者都必须知道这个中介公司。
// 同样在程序中，发布—订阅模式可以用一个全局的 Event 对象来实现，订阅者不需要了解消
// 息来自哪个发布者，发布者也不知道消息会推送给哪些订阅者， Event 作为一个类似“中介者”
// 的角色，把订阅者和发布者联系起来。
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

var Event = (function(){
	var clientList = {},
		listen,
		trigger,
		remove;

	listen = function(key,fn){
		if(!clientList[key]){
			clientList[key] = [];
		}
		clientList[key].push(fn);
	}


	trigger = function(){
		var key = Array.prototype.shift.call(arguments);
		var fns = clientList[key];
		if(!fns||fns.length===0){
			return false;
		}
		for(var i=0,fn;fn=clientList[key][i++];){
			fn.apply(this,arguments);
		}
	}


	remove = function(key,fn){
		var fns = clientList[key];
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


	return {
		listen:listen,
		trigger:trigger,
		remove:remove,
	}
})()


Event.listen( 'squareMeter88', function( price ){ // 小红订阅消息
	console.log( '价格= ' + price ); // 输出： '价格=2000000'
});
Event.trigger( 'squareMeter88', 2000000 ); // 售楼处发布消息