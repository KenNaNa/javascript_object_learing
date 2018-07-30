// 网站里有 header 头部、 nav 导航、消息列表、购物车等模
// 块。这几个模块的渲染有一个共同的前提条件，就是必须先用 ajax 异步请求获取用户的登录信息。
// 这是很正常的，比如用户的名字和头像要显示在 header 模块里，而这两个字段都来自用户登录后
// 返回的信息。至于 ajax 请求什么时候能成功返回用户信息，这点我们没有办法确定。现在的情节看起来像
// 极了售楼处的例子，小明不知道什么时候开发商的售楼手续能够成功办下来。
// 但现在还不足以说服我们在此使用发布—订阅模式，因为异步的问题通常也可以用回调函数
// 来解决。更重要的一点是，我们不知道除了 header 头部、 nav 导航、消息列表、购物车之外，将
// 来还有哪些模块需要使用这些用户信息。如果它们和用户信息模块产生了强耦合

// login.succ(function(data){
// 	header.setAvatar( data.avatar); // 设置 header 模块的头像
// 	nav.setAvatar( data.avatar ); // 设置导航模块的头像
// 	message.refresh(); // 刷新消息列表
// 	cart.refresh(); // 刷新购物车列表
// });

// 现在登录模块是我们负责编写的，但我们还必须了解 header 模块里设置头像的方法叫
// setAvatar、购物车模块里刷新的方法叫 refresh，这种耦合性会使程序变得僵硬， header 模块不
// 能随意再改变 setAvatar 的方法名，它自身的名字也不能被改为 header1、 header2。 这是针对具
// 体实现编程的典型例子，针对具体实现编程是不被赞同的。

// login.succ(function( data ){
// 	header.setAvatar( data.avatar);
// 	nav.setAvatar( data.avatar );
// 	message.refresh();
// 	cart.refresh();
// 	address.refresh(); // 增加这行代码
// });



// 上面这种写法不行啊


// 用发布—订阅模式重写之后，对用户信息感兴趣的业务模块将自行订阅登录成功的消息事件。
// 当登录成功时，登录模块只需要发布登录成功的消息，而业务方接受到消息之后，就会开始进行
// 各自的业务处理，登录模块并不关心业务方究竟要做什么，也不想去了解它们的内部细节。改善
// 后的代码如下：

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

var login = {};

installEvent(login);

$.ajax( 'http:// xxx.com?login', function(data){ // 登录成功
	login.trigger( 'loginSucc', data); // 发布登录成功的消息
});



// 各模块监听登录成功的消息：
var header = (function(){ // header 模块
	login.listen( 'loginSucc', function( data){
		header.setAvatar( data.avatar );
	});
	return {
		setAvatar: function( data ){
			console.log( '设置 header 模块的头像' );
		}
	}
})();
var nav = (function(){ // nav 模块
	login.listen( 'loginSucc', function( data ){
		nav.setAvatar( data.avatar );
	});
	return {
		setAvatar: function( avatar ){
			console.log( '设置 nav 模块的头像' );
		}
	}
})();

// 如上所述，我们随时可以把 setAvatar 的方法名改成 setTouxiang。如果有一天在登录完成之
// 后，又增加一个刷新收货地址列表的行为，那么只要在收货地址模块里加上监听消息的方法即可，
// 而这可以让开发该模块的同事自己完成，你作为登录模块的开发者，永远不用再关心这些行为了。
// 代码如下：

var address = (function(){ // nav 模块
	login.listen( 'loginSucc', function( obj ){
		address.refresh( obj );
	});
	return {
		refresh: function( avatar ){
			console.log( '刷新收货地址列表' );
		}
	}
})();