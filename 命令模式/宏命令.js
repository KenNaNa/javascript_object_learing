// 宏命令是一组命令的集合，通过执行宏命令的方式，可以一次执行一批命令。想象一下，家
// 里有一个万能遥控器，每天回家的时候，只要按一个特别的按钮，它就会帮我们关上房间门，顺
// 便打开电脑并登录 QQ
// 
// 
// 下面我们看看如何逐步创建一个宏命令。首先，我们依然要创建好各种 Command：
var closeDoorCommand = {
	execute:function(){
		console.log('关掉门');
	}
}

var openPcCommand = {
	execute(){
		console.log('打开电脑');
	}
}


var openQQCommand = {
	execute(){
		console.log('打开QQ');
	}
}

// 接下来定义宏命令 MacroCommand，它的结构也很简单。 macroCommand.add 方法表示把子命令添
// 加进宏命令对象，当调用宏命令对象的 execute 方法时，会迭代这一组子命令对象，并且依次执
// 行它们的 execute 方法
// 
var MacroCommand = function(){
	return {
		commandsList:[],
		add:function(command){
			this.commandsList.push(command);
		},
		execute:function(){
			for(var i=0,command;command=this.commandsList[i++];){
				command.execute();
			}
		}
	}
}

var macroCommand = MacroCommand();
macroCommand.add( closeDoorCommand );
macroCommand.add( openPcCommand );
macroCommand.add( openQQCommand );
macroCommand.execute();