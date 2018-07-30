var Upload = function(uploadType){
	this.uploadType = uploadType;
}

// Upload.prototype.init 函数也不再需要，
// 因为 upload 对象初始化的工作被放在了 uploadManager.add 函数里面，
// 接下来只需要定义 Upload.prototype.del 函数即可


Upload.prototype.delFile = function(id){
	uploadManager.setExternalState(id,this);
	if(this.sizeFile<3000){
		return this.dom.parentNode.removeChild(this.dom);
	}

	if ( window.confirm( '确定要删除该文件吗? ' + this.fileName ) ){
		return this.dom.parentNode.removeChild( this.dom );
	}

}


// 在开始删除文件之前，需要读取文件的实际大小，而文件的实际大小被储存在外部管理器
// uploadManager 中，所以在这里需要通过 uploadManager.setExternalState 方法给共享对象设置正确
// 的 fileSize，上段代码中的(1)处表示把当前 id 对应的对象的外部状态都组装到共享对象中


// 工厂进行对象实例化
// 接下来定义一个工厂来创建 upload 对象，如果某种内部状态对应的共享对象已经被创建过，
// 那么直接返回这个对象，否则创建一个新的对象：


var UploadFactory = (function(){
	var createdFlyWeightObjs = {};

	return {
		create:function(uploadType){
			if(createdFlyWeightObjs[uploadType]){
				return createdFlyWeightObjs[uploadType] = new Upload(uploadType);
			}
		}
	}
})()


// 管理器封装外部状态
// 现在我们来完善前面提到的 uploadManager 对象，它负责向 UploadFactory 提交创建对象的请
// 求，并用一个 uploadDatabase 对象保存所有 upload 对象的外部状态，以便在程序运行过程中给
// upload 共享对象设置外部状态，代码如下


var uploadManager = (function(){
	var uploadDatabase = {};

	return {
		add:function(id,uploadType,filesName,fileSize){
			var flyWeightObj = UploadFactory.create(uploadType);

			var dom = document.createComment('div');

			dom.innerHTML = '<span>文件名称:'+ this.fileName +', 文件大小: '+ this.fileSize +'</span>' + '<button class="delFile">删除</button>';
			
			// console.log(obj)
			var obj = document.querySelector('.delFile');
			obj.onclick = function(){
				flyWeightObj.delFile(id);
			}

			document.body.appendChild( dom );
			
			uploadDatabase[id] = {
				fileName:fileName,
				fileSize:fileSize,
				dom:dom,
			};
		},

		setExternalState:function(id,flyWeightObj){
			var uploadData = uploadDatabase[id];

			for(var i in uploadData){
				flyWeightObj[i] = uploadData[i];
			}
		}
	}
})()

// 然后是开始触发上传动作的 startUpload 函数：
var id = 0;

window.startUpload = function(uploadType,files){
	for(var i=0,file;file=files[i++];){
		var uploadObj = uploadManager.add(++id,uploadType,file.fileName,file.fileSize);
	}
}


// 最后是测试时间，运行下面的代码后，可以发现运行结果跟用享元模式重构之前一致：

startUpload('plugin',[
	{
		fileName:'1.txt',
		fileSize:1000,
	},
	{
		fileName:'2.html',
		fileSize:3000,
	},
	{
		fileName:'3.txt',
		fileSize:5000,
	}
]);


startUpload('flash',[
	{
		fileName: '4.txt',
		fileSize: 1000
	},
	{
		fileName: '5.html',
		fileSize: 3000
	},
	{
		fileName: '6.txt',
		fileSize: 5000
	}
])

// 享元模式重构之前的代码里一共创建了 6 个 upload 对象，而通过享元模式重构之后，对象的数/
// 量减少为 2，更幸运的是， 就算现在同时上传 2000 个文件，需要创建的 upload 对象数量依然是 2。
