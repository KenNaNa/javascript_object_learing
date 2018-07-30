var namespace = {
	a:function(){
		console.log('Ken');
	},
	b:function(){
		console.log('nana');
	}
}


var myApp = {};
myApp.namespace = function(name){
	var parts = name.split('.');
	var current = myApp;
	for(var i in parts){
		if(!current[parts[i]]){
			current[parts[i]] = {};
		}
		current = current[parts[i]];
	}
}

myApp.namespace('Ken');
myApp.namespace('dom.style');
console.dir(myApp);