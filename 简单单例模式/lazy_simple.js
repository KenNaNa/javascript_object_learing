var loginLayer = (function(){
	var oInput = document.createElement('input');
	oInput.setAttribute('type','button');
	oInput.setAttribute('value','登录');
	document.getElementById('container').appendChild(oInput);
	oInput.style.display = 'none';
	return oInput;

})()
// var oC = document.getElementById('container');
document.body.onclick = function(){
	console.log(this);
	loginLayer.style.display = 'block';
}