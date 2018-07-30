
function Map(){
	// 私有对象
	// object = {}
	var obj = {};

	this.put = function(key,value){
			obj[key] = value;
	}

	this.get = function(key){
		if(obj[key] || obj[key]===0 || obj[key]===false || obj[key]===NaN){
			return obj[key];
		}else{
			return null;
		}
	}

	this.remove = function(key){
		if(obj[key] || obj[key]===0 || obj[key]===false || obj[key]===NaN){
			delete obj[key];
		}
	}

	this.size = function(){
		var _count = 0;
		for(var prop in obj){
			_count++;
		}
		return _count;
	}

	this.eachMap = function(fn){
		for(var prop in obj){
			fn(prop,obj[prop]);
		}
	}

}




// 模拟java的Map对象
var map = new Map();

map.put('0','name');
map.put('1','age');
map.put('2','address');
map.put('3','city');
map.put('4',new Date);


map.size();

map.get('2');

map.remove('3');

map.eachMap(function(key,value){
	console.log(`${key}---->${value}`);
})