var picImg = (function(){
	var img = document.createElement('img');
	document.body.appendChild(img);
	return {
		setSrc : function(src){
			img.src = src;
		}
	}
})()

picImg.setSrc('Snipaste_2018-01-12_11-17-25.png');