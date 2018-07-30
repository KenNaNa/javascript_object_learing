var getUploadObj = function(){
	try{
		return new ActiveXObject("TXFTNActiveX.FTNUpload");//IE上传控件
	}catch(e){
		if(supportFlash()){
			var str = '<object type="application/x-shockwave-flash"></object>';
			return $(str).appendTo($('body'));
		}else{
			var str = '<input type="file" name="file" />';
			return $(str).appendTo($('body'));
		}
	}
}

// 在不同的浏览器环境下，选择的上传方式是不一样的。因为使用浏览器的上传控件进行上传
// 速度快，可以暂停和续传，所以我们首先会优先使用控件上传。如果浏览器没有安装上传控件，
// 则使用 Flash 上传， 如果连 Flash 也没安装，那就只好使用浏览器原生的表单上传了
// 
// 同样，我们把每种获取 upload 对象的方法都封装在各自的函数里，然后使用一个迭代器，
// 迭代获取这些 upload 对象，直到获取到一个可用的为止
var getActiveUploadObj = function(){
	try{
		return new ActiveXObject("TXFTNActiveX.FTNUpload");
	}catch(e){
		return false;
	}
}

var getFlashUploadObj = function(){
	try{
		var str = '<object data="" type="application/x-shockwave-flash"></object>';
		return $(str).appendTo($('body'));
	}
}

var getFormUploadObj = function(){
	try{
		var str = '<input type="file" name="file" />';
		return $(str).appendTo($('body'));
	}
}

// 在 getActiveUploadObj、 getFlashUploadObj、 getFormUpladObj 这 3 个函数中都有同一个约定：
// 如果该函数里面的 upload 对象是可用的，则让函数返回该对象，反之返回 false，提示迭代器继
// 续往后面进行迭代
//  提供一个可以被迭代的方法，使得 getActiveUploadObj，getFlashUploadObj 以及 getFlashUploadObj
// 依照优先级被循环迭代。
//  如果正在被迭代的函数返回一个对象，则表示找到了正确的 upload 对象，反之如果该函
// 数返回 false，则让迭代器继续工作。
// 迭代器代码如下
var iteratorUploadObj = function(){
	for(var i=0,fn;fn=arguments[i++]){
		var uploadObj = fn();
		if(uploadObj!==false){
			return uploadObj;
		}
	}
}

var uploadObj = iteratorUploadObj( getActiveUploadObj, getFlashUploadObj, getFormUpladObj );

var getWebkitUploadObj = function(){
// 具体代码略
};

var getHtml5UploadObj = function(){
// 具体代码略
};

var uploadObj = iteratorUploadObj( getActiveUploadObj, getWebkitUploadObj,getFlashUploadObj, getHtml5UploadObj, getFormUpladObj );