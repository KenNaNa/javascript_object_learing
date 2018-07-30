var FormFieldFactory = function(subType,superType){
	if( typeof this[superType] === 'function' ){
		function F(){};//定义一个过渡类
		F.prototype = new this[superType]();//F继承superType
		subType.constructor = subType;//手动指定构造函数为subType
		subType.prototype = new F();//
	}else{
		throw new Error('未创建该抽象类')
	}
}
console.log(FormFieldFactory)
/**
 * TextField,PassWordField,EmailField是superType
 * 用来继承使用
 */
FormFieldFactory.TextField = function(){//抽象类
	this.type = 'text';
	this.name = 'TextField';
	this.value = '用户名';
}
FormFieldFactory.TextField.prototype = {
	getTextType:function(){
		return new Error('抽象方法不能调用');
	},
	getTextPlaceHolder:function(){
		return new Error('抽象方法不能调用');
	}
}
FormFieldFactory.PassWordField = function(){//抽象类
	this.type = 'password';
	this.name = 'PassWordField';
	this.value = '密码';
}
FormFieldFactory.PassWordField.prototype = {
	getPassWordType:function(){
		return new Error('抽象方法不能调用');
	},
	getPassWordPlaceHolder:function(){
		return new Error('抽象方法不能调用');
	}
}
FormFieldFactory.EmailField = function(){//抽象类
	console.log(this);
	this.type = 'email';
	this.name = 'EmailField';
	this.value = '邮箱';
}
FormFieldFactory.EmailField.prototype = {
	getEmailType:function(){
		return new Error('抽象方法不能调用');
	},
	getEmailPlaceHolder:function(){
		return new Error('抽象方法不能调用');
	}
}
