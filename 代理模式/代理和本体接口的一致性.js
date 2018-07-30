var myImage = (function(){
	var oImg = document.createElement('img');
	document.body.appendChild(oImg);
	return function(src){
		oImg.src = src;
	}
})()

var proxyImage = (function(){
	var img = new Image();
	img.onload = function(){
		myImage(this.src);
	}

	return function(src){
		myImage('../1.jpg');
		img.src = src;
	}
})()

proxyImage( 'http:// imgcache.qq.com/music// N/k/000GGDys0yA0Nk.jpg' );