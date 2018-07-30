// 给这些 checkbox 绑定点击事件，并且在点击的同时往另一台服务器同步文件：
var synchronous = function(id){
	console.log('开始同步文件，id为：' + id);
}

var nosynchronus = function(id){
	console.log('取消文件同步，id为：' + id);
}
var checkbox = document.getElementsByTagName('input');
for (var i=0,c;c=checkbox[i++];){
	c.onclick = function(){
		if(this.checked===true){
			synchronous(this.id);
		}
		if(this.checked===false){
			nosynchronus(this.id);
		}
	}
}

// 当我们选中 3 个 checkbox 的时候，依次往服务器发送了 3 次同步文件的请求。而点击一个
// checkbox 并不是很复杂的操作，作为 APM250+的资深 Dota 玩家，我有把握一秒钟之内点中 4 个
// checkbox。可以预见，如此频繁的网络请求将会带来相当大的开销

// 解决方案是，我们可以通过一个代理函数 proxySynchronousFile 来收集一段时间之内的请求，
// 最后一次性发送给服务器。比如我们等待 2 秒之后才把这 2 秒之内需要同步的文件 ID 打包发给
// 服务器，如果不是对实时性要求非常高的系统， 2 秒的延迟不会带来太大副作用，却能大大减轻
// 服务器的压力

var synchronous = function(id){
	console.log('开始同步文件，id为：' + id);
}

var nosynchronus = function(id){
	console.log('取消文件同步，id为：' + id);
}

var proxySynchronousFile = function(){
	var cache = [],//保存一段时间内需要同步的id
		timer;//定时器


	return function(id){
		cache.push(id);

		// 判断定时器是否结束
		if(timer){
			return ;
		}

		timer = setTimeout(function(){
			synchronous(cache.join(','));
			clearTimeout(timer);
			timer = null;
			cache.length = 0;
		},2000)
	}
}

var checkbox = document.getElementsByTagName('input');
for (var i=0,c;c=checkbox[i++];){
	c.onclick = function(){
		if(this.checked===true){
			proxySynchronousFile(this.id);
		}
	}
}