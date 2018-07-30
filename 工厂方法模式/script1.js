function createCard(title,content,commentCount){
	var o = new Object();
	o.title = title;
	o.content = content;
	o.commentCount = commentCount;
	o.getTitle = function(){
		console.log(this.title);
	}
	return o;
}