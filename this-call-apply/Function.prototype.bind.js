
Function.prototype.bind = function(contxt){
	var self = this;
	return function(){
		self.apply(contxt,arguments);
	};
}