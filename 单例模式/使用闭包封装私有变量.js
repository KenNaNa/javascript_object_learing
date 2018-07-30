var user = (function(){
	var __name = 'Ken';
	var __age = 18;
	return {
		getUserInfo:function(){
			console.log(`${__name}===>${__age}`);
		}
	}
})()

user.getUserInfo()