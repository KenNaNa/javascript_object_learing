var ary = [];
for (var i=0;i<1000;i++){
	ary.push(i);
}

var renderFriendList = function(data){
	for(var i=0,l=data.length;i<l;i++){
		var oDiv = document.createElement('div');
		oDiv.innerHTML = i;
		oDiv.className = `class_${i}`;
		document.body.appendChild(oDiv);
	}
}

// 接下来这一步会一次性的渲染
// 会让浏览器渲染卡顿
renderFriendList(ary);