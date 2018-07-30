var throttle = function(fn,interval){
	var __self = fn;//保存要进行延迟执行的函数
	var timer;//定时器
	var firstTime = true;//是否第一次执行


	return function(){
		var args = arguments;
		var __me = this;

		if(firstTime){
			// 如果是第一次执行的话
			__self.apply(__me,args);

			// 将firstTime置值为false，
			return firstTime = false;
		}

		// 判断定时器是否存在
		if(timer){
			// 如果存在，说明此次执行还没完成
			// 直接返回false
			return false;
		}

		temer = setTimeout(function(){
			// 首先清除定时器
			clearTimeout(timer);
			// 将定时器回收
			timer = null;

			// 再执行fn函数
			__self.apply(__me,args);
		},interval || 500);
	}
}

window.onresize = throttle(function(){
	console.log(1);
},500)

console.log(2);