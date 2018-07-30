var each = function(ary,fn){
	for(var i=0,l=ary.length;i<l;i++){
		if(fn.call(ary[i],i,ary[i])===false){// callback 的执行结果返回 false，提前终止迭代
			break;
		}
	}
}

each([1,2,3,4],function(i,n){
	if(n>3){
		return false;
	}
	console.log(`${i}====>${n}`);
})