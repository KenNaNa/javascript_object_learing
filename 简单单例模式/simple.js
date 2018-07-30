var CreateInput = (function(){
	var instance;

	var CreateInput = function(value){
		if(instance){
			return instance;
		}
		this.value = value;
		this.init();
		return instance = this;
	}
	CreateInput.prototype.init = function(){
		var oInput = document.createElement('input');
		oInput.setAttribute('type','text');
		oInput.setAttribute('value',this.value);
		oInput.style.border = '1px solid skyblue';
		oInput.style.color = 'red';
		document.getElementById('container').appendChild(oInput);
	} 
	return CreateInput
})()

console.log(CreateInput)

var i = new CreateInput('请输入姓名')
console.log(i)