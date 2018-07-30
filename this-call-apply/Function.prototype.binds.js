Function.prototype.binds = function(){
	var self = this;
	var contxt = [].shift.call(arguments);
	var args = [].slice.call(arguments,1);
	return function(){
		self.apply(contxt,[].concat.call(args,[].slice.call(arguments)));
	}
}

var obj = {
	name : 'Ken',
}

var fnc = function(a,b,c,d){
	console.log(this.name);
	console.log([a,b,c,d]);
}

fnc.bind(obj,1,2)(3,4);