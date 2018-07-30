var CreateDiv = function(html){
	// 这个对象的单一职责性
	// 只用来创建div
	// 即初始化
	this.html = html;
	this.init();
}
CreateDiv.prototype.init = function(){
	var oDiv = document.createElement('div');
	oDiv.id = 'div1';
	oDiv.className = 'class_div1';
	oDiv.innerHTML = this.html;
	document.body.appendChild(oDiv);
}


var proxySingletonCreateDiv = (function(){//引入代理 来创建对象
	var instance;
	return function(html){
		if(!instance){
			instance = new CreateDiv(html);
		}
		return instance;
	}
})()


var a = new proxySingletonCreateDiv('Ken nana');
var b = new proxySingletonCreateDiv('Ken nana');
console.log(a===b);