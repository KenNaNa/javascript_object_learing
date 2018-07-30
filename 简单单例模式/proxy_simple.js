var CreateInput = function(value){
	this.value = value;
	this.init()
}
CreateInput.prototype.init = function(){
	var oInput = document.createElement('input');
	oInput.setAttribute('type','text');
	oInput.setAttribute('value',this.value);
	oInput.style.border = '1px solid skyblue';
	oInput.style.color = 'red';
	document.getElementById('container').appendChild(oInput);
}

var proxySimpleInput = (function(){
	var instance;
	return function( value ){
		if(!instance){
			instance = new CreateInput(value);
		}
		return instance;
	}
})()

console.log(CreateInput)
console.log(proxySimpleInput)
var i = new CreateInput('请输入姓名')
console.log(i)

var psi = new proxySimpleInput('请输入密码');

var psiw = new proxySimpleInput('请输入邮箱地址');
console.log(psi)