function getElementsByClassName(node,className){
	if(node.getElementsByClassName){
		// 现有的写法
		return node.getElementsByClassName(className);
	}else{
		var results = new Array();
		var elems = node.getElementsByClassName('*');
		for(var i=0,length=elems.length;i<length;i++){
			if(elems[i].className.indexOf(className)!=-1){
				results.[results.length] = elems[i];
			}
		}
		return results;
	}
}