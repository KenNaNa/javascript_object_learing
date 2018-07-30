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
function createField(type,val){
	var o = new Object();

	switch(type){
		case 'text':
			o.TextField = new TextField(val).init();
			break;
		case 'password':
			o.TextField = new PassWordField(val).init();
			break;
		case 'email':
			o.TextField = new EmailField(val).init();
			break;

	}

	return o;
}