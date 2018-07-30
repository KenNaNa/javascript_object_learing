//我们可以想到js对象中的key值他是不能重复的
//所以我们可以利用js对象来去掉数组中重复的元素

// 将js数组转换成js对象
// 将js数组中重复的元素去掉

var toObject = function(arr){
	var obj = {};

	var len = arr.length;

	for(var i=0;i<len;i++){
		obj[arr[i]] = true;
	}

	return obj;
}


//接下来就是将js对象转换成数组

var keys = function(obj){
	return Object.keys(obj);
}


var keys = function(obj){
	var arr = [];
	for(var prop in obj){
		if(obj.hasOwnProperty(prop)){
			arr.push(prop);
		}
	}

	return arr;
}


var uniq = function(newarr){
	return keys(toObject(newarr));
}