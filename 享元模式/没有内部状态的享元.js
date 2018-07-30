// 在继续使用享元模式的前提下，构造函数 Upload 就变成了无参数的形式：
var Upload = function(){};


var UploadFactory = (function(){
	var uploadObj;

	return {
		create:function(){
			if(uploadObj){
				return uploadObj;
			}
			return uploadObj = new Upload();
		}
	}
})()

// 管理器部分的代码不需要改动，还是负责剥离和组装外部状态。可以看到，当对象没有内部
// 状态的时候，生产共享对象的工厂实际上变成了一个单例工厂。虽然这时候的共享对象没有内部
// 状态的区分，但还是有剥离外部状态的过程，我们依然倾向于称之为享元模式