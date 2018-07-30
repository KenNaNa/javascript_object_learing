var reverseEach = function(ary,callback){
	for(var l=ary.length-1;l>=0;l--){
		callback.call(ary[l],l,ary[l]);
	}
}

reverseEach([1,2,3,4,5],function(i,n){
	console.log(`${i}======>${n}`);
})