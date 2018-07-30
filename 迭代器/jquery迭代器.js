// 很多浏览器都支持Array.prototype.forEach()
// JQuery迭代器
$.each([1,2,3],function(i,n){
	console.log(i);
	console.log(n);
});

$('p').each(function(index){
	$(this).style.backgroundColor = 'red';
})