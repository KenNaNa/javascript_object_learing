var TextField = function(val){
	this.val = val;
}

TextField.prototype.init = function(){
	var TextFieldIput = document.createElement('input');
	TextFieldIput.setAttribute('type','text');
	TextFieldIput.setAttribute('value',this.val);
	document.getElementById('container').appendChild(TextFieldIput);
}
//python -m http.server 8888 &
var PassWordField = function(val){
	this.val = val;
}

PassWordField.prototype.init = function(){
	var PassWordFieldIput = document.createElement('input');
	PassWordFieldIput.setAttribute('type','password');
	PassWordFieldIput.setAttribute('value',this.val);
	document.getElementById('container').appendChild(PassWordFieldIput);
}
var EmailField = function(val){
	this.val = val;
}

EmailField.prototype.init = function(){
	var EmailFieldIput = document.createElement('input');
	EmailFieldIput.setAttribute('type','email');
	EmailFieldIput.setAttribute('value',this.val);
	document.getElementById('container').appendChild(EmailFieldIput);
}

var FormFactory = function(type,val){
	switch(type){
		case 'text':
			return new TextField(val).init()
		break;
		case 'password':
			return new PassWordField(val).init()
		break;
		case 'email':
			return new EmailField(val).init()
		break;
		default:
		break;
	}

}
