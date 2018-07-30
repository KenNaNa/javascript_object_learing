var getUserId = function(userId,callback){
	$.ajax('http://xxx.com/getUserInfo?' + userId,function(data){
		callback(data);
	})
}

getUserId(123456,function(data){
	console.log(data.userName);
})