var Flower = function(){};

// 我们来看看Ken追MM的故事
// 没用代理模式
// 他太勇敢了
// 不敢相信
var Ken = {
	sendFlower:function(target){
		var flower = new Flower();
		target.receiveFlower(flower);
	}
}

var MM = {
	receiveFlower:function(flower){
		console.log('谢谢您送的花，我非常喜欢，我们交往吧' + flower);
	}
}

Ken.sendFlower(MM);