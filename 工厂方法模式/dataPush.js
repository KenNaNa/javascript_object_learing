function dataPush(dataArr,dataObj){
	if(typeof dataArr==='object'
		&&
		typeof dataObj=='object'
		&&
		typeof dataObj!==null
	  ){
		return dataArr.push(dataObj);
	}
	
}