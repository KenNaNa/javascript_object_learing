// 迭代器的实现
var Iterator = function(obj){
	var current = 0;


	var next = function(){
		current += 1;
	};

	var isDone = function(){
		return current >= obj.length;
	};

	var getCurrItem = function(){
		return obj[current];
	};

	return {
		next:next,
		isDone:isDone,
		getCurrItem:getCurrItem,
	};
}


var compare = function(I1,I2){
	while(!I1.isDone() || !I2.isDone()){
		if(I1.getCurrItem()!==I2.getCurrItem()){
			throw new Error('不相等');
		}
		I1.next();
		I2.next();
	}
	console.log('相等');
	
}


var I1 = Iterator([1,2,3]);
var I2 = Iterator([1,2,3]);

compare(I1,I2);


var I3 = Iterator([1,2,3]);
var I4 = Iterator([1,2,3,4]);

compare(I3,I4);


var I5 = Iterator([1,2]);
var I6 = Iterator([1,2,3]);
compare(I5,I6);