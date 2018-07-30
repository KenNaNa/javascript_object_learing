// 我们可以抽离出管理单例的逻辑
// 这个逻辑始终是一样的
// 就是用一个变量来标志是否创建过对象
// 如果是，则下次直接返回这个已经创建过的对象
var getSingle = function(fn){
	var result;
	return function(){
		return result || (result=fn.apply(this,arguments));
	}
}

/**
 * 接下来将用于创建登录浮窗的方法用参数 fn 的形式传入 getSingle，
 * 我们不仅可以传入createLoginLayer，
 * 还能传入 createScript、 createIframe、 createXhr 等。
 * 之后再让 getSingle 返回一个新的函数，
 * 并且用一个变量 result 来保存 fn 的计算结果。
 *  result 变量因为身在闭包中
 *  永远不会被销毁。在将来的请求中，
 *  如果 result 已经被赋值，那么它将返回这个值。
 */

var createLoginLayer = function(){
	var div = document.createElement( 'div' );
	div.innerHTML = '我是登录浮窗';
	div.style.display = 'none';
	document.body.appendChild( div );
	return div;
};
var createSingleLoginLayer = getSingle( createLoginLayer );
document.getElementById( 'loginBtn' ).onclick = function(){
	var loginLayer = createSingleLoginLayer();
	loginLayer.style.display = 'block';
};

// 下面我们再试试创建唯一的 iframe 用于动态加载第三方页面
var createSingleIframe = getSingle( function(){
	var iframe = document.createElement ( 'iframe' );
	document.body.appendChild( iframe );
	return iframe;
});
document.getElementById( 'loginBtn' ).onclick = function(){
	var loginLayer = createSingleIframe();
	loginLayer.src = 'http://baidu.com';
};


// 
// 
// 
var bindEvent = function(){
	$( 'div' ).one( 'click', function(){
		alert ( 'click' );
	});
};
var render = function(){
	console.log( '开始渲染列表' );
	bindEvent();
};
render();
render();
render();

// 
// 
// 
// 
// 如果利用 getSingle 函数，也能达到一样的效果。代码如下：
var bindEvent = getSingle(function(){
	document.getElementById( 'div1' ).onclick = function(){
		alert ( 'click' );
	}
	return true;
});
var render = function(){
	console.log( '开始渲染列表' );
	bindEvent();
};
render();
render();
render()