var Flower = function(){};

var Ken = {
	sendFlower(target){
		var flower = new Flower();
		target.receiveFlower(flower);
	}
}

var proxy = {
	receiveFlower(flower){
		// MM.receiveFlower(flower);
		MM.listenGoodMood(function(){
			MM.receiveFlower(flower);
		})
	}
}


var MM = {
	receiveFlower(flower){
		console.log('谢谢您送的花，我非常喜欢，我们交往吧' + flower);
	},
	listenGoodMood(fn){//监听好心情
		setTimeout(function(){
			fn();
		},10)
	}
}

Ken.sendFlower(proxy);