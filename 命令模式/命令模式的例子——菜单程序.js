// 假设我们正在编写一个用户界面程序，该用户界面上至少有数十个 Button 按钮。因为项目
// 比较复杂，所以我们决定让某个程序员负责绘制这些按钮，而另外一些程序员则负责编写点击按
// 钮后的具体行为，这些行为都将被封装在对象里
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');


// 接下来定义 setCommand 函数， setCommand 函数负责往按钮上面安装命令。可以肯定的是，点
// 击按钮会执行某个 command 命令，执行命令的动作被约定为调用 command 对象的 execute()方法。
// 虽然还不知道这些命令究竟代表什么操作，但负责绘制按钮的程序员不关心这些事情，他只需要
// 预留好安装命令的接口， command 对象自然知道如何和正确的对象沟通

var setCommand = function(button,command){
	button.onclick = function(){
		command.execute();
	}
}


// 最后，负责编写点击按钮之后的具体行为的程序员总算交上了他们的成果，他们完成了刷新
// 菜单界面、增加子菜单和删除子菜单这几个功能，这几个功能被分布在 MenuBar 和 SubMenu 这两
// 个对象中：



var MenuBar = {
	refresh:function(){
		console.log('刷新程序');
	}
}


var SubMenu = {
	add:function(){
		console.log('添加子程序');
	},
	del:function(){
		console.log('删除子程序');
	}
}

// 在让 button 变得有用起来之前，我们要先把这些行为都封装在命令类中
var RefreshMenuBarCommand = function(receiver){
	this.receiver = receiver;
}

RefreshMenuBarCommand.prototype.execute = function(){
	this.receiver.refresh();
}


var AddSubMenuBarCommand = function(receiver){
	this.receiver = receiver;
}

AddSubMenuBarCommand.prototype.execute = function(){
	this.receiver.add();
}

var DelSubMenuCommand = function(receiver){
	this.receiver = receiver;
}

DelSubMenuCommand.prototype.execute = function(){
	console.log('删除子程序');
}

// 最后就是把命令接收者传入到 command 对象中，并且把 command 对象安装到 button 上面
var refreshMenuBarCommand = new RefreshMenuBarCommand( MenuBar );
var addSubMenuCommand = new AddSubMenuCommand( SubMenu );
var delSubMenuCommand = new DelSubMenuCommand( SubMenu );


setCommand( button1, refreshMenuBarCommand );
setCommand( button2, addSubMenuCommand );
setCommand( button3, delSubMenuCommand );