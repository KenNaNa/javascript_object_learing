// 首先改写 Folder 类和 File 类，在这两个类的构造函数中，增加 this.parent 属性，并且在调
// 用 add 方法的时候，正确设置文件或者文件夹的父节点
var Folder = function(name){
	this.name = name;
	this.parent = null;
	this.files = [];
}

Folder.prototype.add = function(file){
	file.parent = this;
	this.files.push(file);
}

Folder.prototype.scan = function(){
	console.log('开始扫描文件夹, ' + this.name);
	for(var i=0,file,files=this.files;file = files[i++];){
		file.scan();
	}
}

// 接下来增加 Folder.prototype.remove 方法，表示移除该文件夹
Folder.prototype.remove = function(){
	if(!this.parent){
		return;////根节点或者树外的游离节点
	}

	for(var files = this.parent.files,l = files.length - 1;l>=0;l--){
		var file = files[l];
		if(file===this){
			files.splice(l,1);
		}
	}
}

// 在 File.prototype.remove 方法里，首先会判断 this.parent，如果 this.parent 为 null，那么
// 这个文件夹要么是树的根节点，要么是还没有添加到树的游离节点，这时候没有节点需要从树中
// 移除，我们暂且让 remove 方法直接 return，表示不做任何操作。
// 如果 this.parent 不为 null，则说明该文件夹有父节点存在，此时遍历父节点中保存的子节
// 点列表，删除想要删除的子节点。
// File 类的实现基本一致：
var File = function( name ){
	this.name = name;
	this.parent = null;
};

File.prototype.add = function(){
	throw new Error( '不能添加在文件下面' );
};

File.prototype.scan = function(){
	console.log( '开始扫描文件: ' + this.name );
};

File.prototype.remove = function(){
	if ( !this.parent ){ //根节点或者树外的游离节点
		return;
	}
	for ( var files = this.parent.files, l = files.length - 1; l >=0; l-- ){
		var file = files[ l ];
		if ( file === this ){
			files.splice( l, 1 );
		}
	}
};

// 下面测试一下我们的移除文件功能：
var folder = new Folder( '学习资料' );
var folder1 = new Folder( 'JavaScript' );
var file1 = new Folder ( '深入浅出 Node.js' );

folder1.add( new File( 'JavaScript 设计模式与开发实践' ) );
folder.add( folder1 );
folder.add( file1 );

folder1.remove(); //移除文件夹
folder.scan();