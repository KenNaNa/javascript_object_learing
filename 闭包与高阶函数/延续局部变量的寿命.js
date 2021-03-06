// img经常用于上报数据
var report = function(src){
	var img = new Image();
	img.src = src;
}
/**
 * 但是通过查询后台的记录我们得知，
 * 因为一些低版本浏览器的实现存在 bug，
 * 在这些浏览器下使用 report 
 * 函数进行数据上报会丢失 30%左右的数据，
 * 也就是说， report 函数并不是每一次
 * 都成功发起了 HTTP 请求。
 * 丢失数据的原因是 img 是 report 函数中的局部变量，
 * 当 report 函数的调用结束后， 
 * img 局部变量随即被销毁，
 * 而此时或许还没来得及发出 HTTP 请求，
 * 所以此次请求就会丢失掉。
 */
// 现在我们把 img 变量用闭包封闭起来，便能解决请求丢失的问题
var report = (function(){
	var imgs = [];
	return function(src){
		var img = new Image();
		imgs.push(img);
		img.src = src;
	}
})()