var addEvent = function(elem,type,handler){
	if(window.addEventListener){
		return elem.addEventListener(type,handler,false);
	}
	if(window.attachEvent){
		return elem.attachEvent('on'+type,handler);
	}
}


// 修改版
var addEvent = (function(){
	if(window.addEventListener){
		return function(elem,type,handler){
			elem.addEventListener(type,handler,false);
		}
	}
	if(window.attachEvent){
		return function(elem,type,handler){
			elem.attachEvent(`on${type}`,handler);
		}
	}
})()


var oDiv = document.getElementById('div1');
addEvent(oDiv,'click',function(){
	console.log('----------------');
	console.log('点击了我');
})

addEvent(oDiv,'click',function(){
	console.log('------------------------');
	console.log('再次点击了我');
})