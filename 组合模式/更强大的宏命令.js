var MacroCommand = function(){
	return {
		commandsList:[],
		add:function(command){
			this.commandsList.push(command);
		},
		execute(){
			for(var i=0,command;command=this.commandsList[i++];){
				command.execute()
			}
		}
	}
}


var openAcCommand = {
	execute:function(){
		console.log('打开空调');
	}
}

var openTvCommand = {
	execute:function(){
		console.log('打开空调');
	}
}

var openSoundCommand = {
	execute:function(){
		console.log('打开音响');
	}
}

var macroCommand1 = MacroCommand();
macroCommand1.add(openTvCommand);
macroCommand1.add(openAcCommand);
macroCommand1.add(openSoundCommand);


var closeDoorCommand = {
	execute:function(){
		console.log('关门');
	}
}

var openPcCommand = {
	execute:function(){
		console.log('打开电脑');
	}
}

var openQQCommand = {
	execute:function(){
		console.log('登录QQ');
	}
}

var macroCommand2 = MacroCommand();
macroCommand2.add(closeDoorCommand);
macroCommand2.add(openPcCommand);
macroCommand2.add(openQQCommand);


var macroCommand = MacroCommand();
macroCommand.add(macroCommand1);
macroCommand.add(macroCommand2);

var setCommand = (function(command){
	document.getElementById('button').onclick = function(){
		command.execute();
	}
})(macroCommand);

