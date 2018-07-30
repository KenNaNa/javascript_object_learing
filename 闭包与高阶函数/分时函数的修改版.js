/**
 * 这个问题的解决方案之一是下面的 timeChunk 函数， 
 * timeChunk 函数让创建节点的工作分批进行，
 * 比如把 1 秒钟创建 1000 个节点，改为每隔 200 毫秒创建 8 个节点
 * timeChunk 函数接受 3 个参数，
 * 第 1 个参数是创建节点时需要用到的数据，ary
 * 第 2 个参数是封装了创建节点逻辑的函数，fn
 * 第 3 个参数表示每一批创建的节点数量,count
 */

var timeChunk = function(ary,fn,count){
	var timer,//定时器
		obj;//存储
	var len = ary.length;//数据的长度

	// 创建函数
	var start = function(){
		for(var i=0;i<Math.min(count||1,ary.length);i++){//规定在count数目下执行
			obj = ary.shift();//弹出
			fn(obj);
		}
	}


	return function(){
		timer = setInterval(function(){
			if(ary.length===0){//表示列表已经创建完毕
				// 清除定时器
				var t = clearInterval(timer);
				// 回收timer
				timer = null;
				return t;
			}

			start();
		},8)
	}
}

var ary = [];
for(var i=0;i<1000;i++){
	ary.push(i);
}

var renderFriendList = timeChunk(ary,function(n){
	var oDiv = document.createElement('div');
	oDiv.innerHTML = n;
	oDiv.className = `class_${n}`;
	document.body.appendChild(oDiv);
},200);

renderFriendList()