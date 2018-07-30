// 页面一上来就给她创建好
// 只是将他隐藏了
// 等到点击登录时
// 再显示
var loginLayer = (function(){
	var oDiv = document.createElement('div');
	oDiv.innerHTML = '我是登录弹窗';
	oDiv.className = 'class_div';
	oDiv.id = 'div1';
	document.body.appendChild(oDiv);
	oDiv.style.display = 'none';
	return oDiv;
})()

loginLayer.flag = false;
document.getElementById('loginBtn').onclick = function(){
	if(!loginLayer.flag){
		loginLayer.style.display = 'block';
		loginLayer.flag = true;
	}else{
		loginLayer.style.display = 'none';
		loginLayer.flag = false;
	}
}

// 这种方式有一个问题，也许我们进入 WebQQ 只是玩玩游戏或者看看天气，根本不需要进行
// 登录操作，因为登录浮窗总是一开始就被创建好，那么很有可能将白白浪费一些 DOM 节点
var CreateDiv = function(){
	var oDiv = document.createElement('div');
	oDiv.innerHTML = '我是登录弹窗';
	oDiv.className = 'class_div';
	oDiv.id = 'div1';
	document.body.appendChild(oDiv);
	oDiv.style.display = 'none';
	return oDiv;
}
var loginLayer = CreateDiv();
loginLayer.flag = false;
document.getElementById('loginBtn').onclick = function(){
	if(!loginLayer.flag){
		loginLayer.style.display = 'block';
		loginLayer.flag = true;
	}else{
		loginLayer.style.display = 'none';
		loginLayer.flag = false;
	}
}

// 单然也可以用闭包
var createLoginLayer = (function(){
	var div;
	return function(){
		if ( !div ){
			div = document.createElement( 'div' );
			div.innerHTML = '我是登录浮窗';
			div.style.display = 'none';
			document.body.appendChild( div );
		}
		return div;
	}
})();