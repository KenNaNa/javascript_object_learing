//new P('Ken')
//现在我们将P和'Ken'
//作为newObj的两个参数
//传进newObj
var newObj = function(){
	// 创建一个实例化对象
	var obj = new Object();

	//获取传进来的父级对象
	
	var Constructor = [].shift.call(arguments);

	// 然后通过obj.__proto__属性拷贝父级对象的P.prototype
	obj.__proto__ = Constructor.prototype

	// 通过P父级对象实例化一个对象
	// P('Ken')
	// 通过P.apply(obj,arguments)
	// 实现obj(arguments)
	var retValue = Constructor.apply(obj,arguments); 

	// 判断retValue是否是对象
	return typeof retValue==='object' ? retValue : obj
	

}