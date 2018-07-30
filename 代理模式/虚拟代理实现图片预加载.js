var myImage = (function(){
	var oImg = document.createElement('img');
	document.body.appendChild(oImg);
	return {
		setSrc : function(src){
			oImg.src = src;
		}
	}
})()

myImage.setSrc('http:// imgcache.qq.com/music/photo/k/000GGDys0yA0Nk.jpg');


// 现在开始引入代理对象 proxyImage，通过这个代理对象，在图片被真正加载好之前，页面中
// 将出现一张占位的菊花图 loading.gif, 来提示用户图片正在加载

var myImage = (function(){
	var oImg = document.createElement('img');
	document.body.appendChild(oImg);
	return {
		setSrc : function(src){
			oImg.src = src;
		}
	}
})()

var proxyImage = (function(){
	var img = new Image();
	img.onload = function(){
		myImage.setSrc(this.src);
	}

	return {
		setSrc:function(src){
			myImage.setSrc('./Snipaste_2018-01-12_11-17-25.png');
			img.src = src;
		}
	}
})()

myImage.setSrc('http:// imgcache.qq.com/music/photo/k/000GGDys0yA0Nk.jpg');


// 不用代理的方法加载图片
var myImage = (function(){
	var oImg = document.createElement('img');
	document.body.appendChild(oImg);

	var img = new Image();
	img.onload = function(){
		oImg.src = img.src;
	}

	return {
		setSrc:function(src){
			oImg.src = './Snipaste_2018-01-12_11-17-25.png';
			img.src = src;
		}
	}
})()
