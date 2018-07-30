Function.prototype.moapply = function(contxt,arr){
	var contxt = Object(contxt) || window;
	contxt.fn = this;
	var results;
	if(!arr){
		results = contxt.fn();
	}else{
		var args;
		args = [].slice.call(arr);
		results = contxt.fn(...args);
	}
	delete contxt.fn;
	return results;
}