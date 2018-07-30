// 我们还可以在对象池工厂里，把创建对象的具体过程封装起来，实现一个通用的对象池：
var objectPoolFactory = function(createObjFn){
	var objectPool = [];

	return {
		create:function(){
			var obj = objectPool.length === 0 ? 
				createObjFn.apply(this,arguments) :
				objectPool.shift();

			return obj;
		},

		recover:function(obj){
			objectPool.push(obj);
		}
	}
}

// 现在利用 objectPoolFactory 来创建一个装载一些 iframe 的对象池：

var iframeFactory = objectPoolFactory(function(){
	var iframe = document.createElement('iframe');

	document.body.appendChild(iframe);


	iframe.onload = function(){
		iframe.onload = null;//防止iframe重复加载
		iframeFactory.recover(iframe);//iframe加载完回收
	}

	return iframe;
})


var iframe1 = iframeFactory.create();
iframe1.src = 'http:// baidu.com';


var iframe2 = iframeFactory.create();
iframe2.src = 'http:// QQ.com';


setTimeout(function(){
	var iframe3 = iframeFactory.create();
	iframe3.src = 'http:// 163.com';
}, 3000 );

// 对象池是另外一种性能优化方案，它跟享元模式有一些相似之处，但没有分离内部状态和外
// 部状态这个过程。本章用享元模式完成了一个文件上传的程序，其实也可以用对象池+事件委托
// 来代替实现。