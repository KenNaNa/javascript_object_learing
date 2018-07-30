document.body.addEventListener('click',function(){
	console.log(2)
},false);

// 模拟用户点击
document.body.click();

// 在这里需要监控用户点击 document.body 的动作，但是我们没办法预知用户将在什么时候点
// 击。所以我们订阅 document.body 上的 click 事件，当 body 节点被点击时， body 节点便会向订阅
// 者发布这个消息。这很像购房的例子，购房者不知道房子什么时候开售，于是他在订阅消息后等
// 待售楼处发布消息
// 
// 手动触发事件更好的做法是 IE 下用 fireEvent，标准浏览器下用 dispatchEvent 实现