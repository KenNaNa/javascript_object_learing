var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');

var MenuBar = {
	refresh:function(){
		console.log('刷新菜单');
	}
}

var MenuBarCommand = function(receiver){
	return function(){
		receiver.refresh();
	}
}

var menubarcommand = MenuBarCommand(MenuBar);

var setCommand = function(button,func){
	button.onclick = function(){
		func();
	}
}

setCommand(button1,menubarcommand);

// 当然，如果想更明确地表达当前正在使用命令模式，或者除了执行命令之外，将来有可能还
// 要提供撤销命令等操作。那我们最好还是把执行函数改为调用 execute 方法
var MenuBarCommand = function(receiver){
	return {
		execute:function(){
			receiver.refresh();
		}
	}
}

var setCommand = function(button,command){
	button.onclick = function(){
		command.execute();
	}
}

var menubarcommand = MenuBarCommand(MenuBar);
setCommand(button1,menubarcommand);
