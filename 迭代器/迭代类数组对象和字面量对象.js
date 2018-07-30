// 在 JavaScript 中， for in 语句可以用来迭代普通字面量对象的属性
window.$ = {};
$.each = function(obj,callback){
	var value ,
		i = 0,
		length = obj.length,
		isArray = isArrayLike(obj);
	if(isArray){
		for( ;i<length;i++ ){//数组
			value = callback.call(obj[i],i,obj[i]);
			if(value===false){
				break;
			}
		}
	}else{
		for(i in obj){//对象
			value = callback.call(obj[i],i,obj[i]);
			if(value===false){
				break;
			}
		}
	}

	function isArrayLike(obj){
		return Array.from(obj);
		// [].slice.call(obj);
		
	}

	return obj;
}

$.each([1,2,3],function(i,n){
	console.log(`${i}====>${n}`);
})

var obj = {
	'length':3,
	"0":1,
	"1":2,
	"2":3,
}
obj[3] = 4;
obj[3] = null;
delete obj[3]
console.log(obj["length"]);
console.log(obj);

// __proto__
// console.log(obj.__proto__.constructor.apply(Array,arguments));
// obj.__proto__.constructor.call(Array.prototype);
// console.log(obj)

// 是否有length属性
// 将一个类似ArrayLikeobj对象转换为Array
function objToArray(obj){
	if(typeof obj==='object' && (length in obj)){
		return [].slice.call(obj);
	}
}

var o = objToArray(obj);
console.log(o);

console.log('------------------------------')
var obj = {
	"0":1,
	"1":2,
	"2":3,
}
console.log(obj);

var o = objToArray(obj);
console.log(o);//[]