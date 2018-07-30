// 比如现在有两个模块， a 模块里面有一个按钮，每次点击按钮之后， b 模块里的 div 中会显示
// 按钮的总点击次数，我们用全局发布—订阅模式完成下面的代码，使得 a 模块和 b 模块可以在保
// 持封装性的前提下进行通信。


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


var a = (function(){
	var count = 0;
	var button = document.getElementById('count');
	button.onclick = function(){
		Event.trigger('add',count++);
	}
})()


var b = (function(){
	var div = document.getElementById('show');

	Event.listen('add',function(count){
		div.innerHTML = count;
	})
})()