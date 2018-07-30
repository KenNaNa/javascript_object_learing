var each = function(ary,callback){
	for(var i=0,l=ary.length;i<l;i++){
		callback.call(ary[i],i,ary[i]);
	}
}

var compare = function(ary1,ary2){
	if(ary1.length!==ary2.length){
		throw new Error('不相等');
	}
	each(ary1,function(i,n){
		if(n!==ary2[i]){
			throw new Error('不相等');
		}
	})

	console.log('ary1和ary2相等');
}


compare([1,2,3,4],[1,2,3,4])
compare([1,2,3],[1,2,3,4]);