var CreateDiv = (function(){
	var instance;
	var CreateDiv = function(html){
		if(instance){//如果instance存在的话，就直接返回这个对象
			return instance;
		}
		this.html = html;
		this.init();//创建div

		console.log(this);
		return instance = this;//实例化对象
	}
	CreateDiv.prototype.init = function(){
		var oDiv = document.createElement('div');
		oDiv.innerHTML = this.html;
		oDiv.id = 'div1';
		oDiv.className = 'class_div1';
		document.body.appendChild(oDiv);
	}

	return CreateDiv;
})()

var a = new CreateDiv('Ken');
var b = new CreateDiv('Ken');
console.log(a===b);//true;
console.log('a ====> '+ a);//a ====> [object Object]
console.log('b ====> '+ b);//b ====> [object Object]
console.log(CreateDiv)