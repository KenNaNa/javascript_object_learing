var FormFactory = function(type, val){
	if(this instanceof FormFactory){
		var s = new this[type](val);
		return s;
	}else{
		return new FormFactory(type,val);
	}
}

FormFactory.prototype = {
	TextField : function(val){
		this.type = 'TextField';
		this.name = 'TextField';
		this.val = val;
		console.log(this);
		(function(val){
			var TextFieldIput = document.createElement('input');
			TextFieldIput.setAttribute('type','text');
			TextFieldIput.setAttribute('value',val);
			TextFieldIput.style.border = '1px solid skyblue';
			TextFieldIput.style.color = 'skyblue';
			document.getElementById('container').appendChild(TextFieldIput);
		})(val)
	},
	PassWordField : function(val){
		this.type = 'PassWordField';
		this.name = 'PassWordField';
		this.val = val;
		(function(val){
			var PassWordFieldIput = document.createElement('input');
			PassWordFieldIput.setAttribute('type','password');
			PassWordFieldIput.setAttribute('value',val);
			PassWordFieldIput.style.border = '1px solid skyblue';
			PassWordFieldIput.style.color = 'skyblue';
			document.getElementById('container').appendChild(PassWordFieldIput);
		})(val)
	},
	EmailField : function(val){
		this.type = 'EmailField';
		this.name = 'EmailField';
		this.val = val;
		(function(val){
			var EmailFieldIput = document.createElement('input');
			EmailFieldIput.setAttribute('type','email');
			EmailFieldIput.setAttribute('value',val);
			EmailFieldIput.style.border = '1px solid skyblue';
			EmailFieldIput.style.color = 'skyblue';
			document.getElementById('container').appendChild(EmailFieldIput);
		})(val)
	}
}