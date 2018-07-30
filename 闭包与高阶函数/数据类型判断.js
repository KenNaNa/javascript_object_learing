var Typeof = function(){
	var isString = function(obj){
		return Object.prototype.toString.call(obj)==='[object String]';
	}

	var isNumber = function(obj){
		return Object.prototype.toString.call(obj)==='[object Number]';
	}

	var isObject = function(obj){
		return Object.prototype.toString.call(obj)==='[object Object]';
	}

	var isArray = function(obj){
		return Object.prototype.toString.call(obj)==='[object Array]';
	}

	var isBoolean = function(obj){
		return Object.prototype.toString.call(obj)==='[object Boolean]';
	}

	return {
		isString:isString,
		isNumber:isNumber,
		isObject:isObject,
		isArray:isArray,
	}

}


var Type = function(type){
	return function(obj){
		return Object.prototype.toString.call(obj)==='[object '+type+']';
	}
}
var isString = Type('String');
console.log(isString('str'));
var isNumber = Type('Number');
console.log(isNumber(10));
var isArray = Type('Array');
console.log(isArray(['str']));


var Type = {}
for(var i=0,type;type=['String','Array','Number','Boolean'][i++];){
	(function(type){
		Type['is'+type] = function(obj){
			return Object.prototype.toString.call(obj)==='[object '+type+']';
		}
	})(type)
}

console.log(Type.isArray([]));
console.log(Type.isBoolean(true));
