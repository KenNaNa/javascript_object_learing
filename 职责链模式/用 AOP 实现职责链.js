// 下面我们改写一下 3.2.3 节 Function.prototype.after 函数，使得第一个函数返回'nextSuccessor'
// 时，将请求继续传递给下一个函数，无论是返回字符串'nextSuccessor'或者 false 都只是一个约
// 定，当然在这里我们也可以让函数返回 false 表示传递请求，选择'nextSuccessor'字符串是因为
// 它看起来更能表达我们的目的，代码如下：

// 500元订单
var order500 = function(orderType,pay,stock){
	if(orderType===1 && pay===true){
		console.log('500 元定金预购, 得到 100 优惠券');
	}else{
		order200(orderType,pay,stock);
	}
}

// 200订单
var order200 = function(orderType,pay,stock){
	if(orderType===2 && pay===true){
		console.log('200 元定金预购, 得到 50 优惠券')
	}else{
		orderNormal( orderType, pay, stock ); // 将请求传递给普通订单
	}
}

// 普通购买订单
var orderNormal = function(orderType,pay,stock){
	if(stock>0){
		console.log( '普通购买, 无优惠券' );
	}else{
		console.log('手机库存不足');
	}
}


Function.prototype.after = function(fn){
	var self = this;

	return function(){
		var ret = self.apply(this,arguments);
		if(ret==='nextSuccessor'){
			return fn.apply(this,arguments);
		}

		return ret;
	}
}

var order = order500.after( order200 ).after( orderNormal );
order( 1, true, 500 ); // 输出： 500 元定金预购，得到 100 优惠券
order( 2, true, 500 ); // 输出： 200 元定金预购，得到 50 优惠券
order( 1, false, 500 ); // 输出：普通购买，无优惠券


// 用 AOP 来实现职责链既简单又巧妙，但这种把函数叠在一起的方式，同时也叠加了函数的
// 作用域，如果链条太长的话，也会对性能有较大的影响