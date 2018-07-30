// 未加载真正的 miniConsole.js 之前的代码
var cache = [];
var miniConsole = {
	log(){
		var args = arguments;
		cache.push(function(){
			return miniConsole.log.apply(miniConsole,args);
		})
	}
}
miniConsole.log(1);


// 当用户按下F12键时，就加载代码
// 调出miniConsole控制台
var handler = function(ev){
	if(ev.keyCode===113){
		var script = document.createElement('script');
		script.onload = function(){
			for(var i=0,fn;fn=cache[i++];){
				fn();
			}
		};
		script.src='miniConsole.js';
		document.getElementsByTagName('head')[0].appendChild(script);
	}
}

document.body.addEventListener('keydown',handler,false);

// miniConsole代码
miniConsole = {
	log:function(){
		console.log(Array.prototype.join.call(arguments));
	}
}

// 就是我们要保证在 F2 被重复按下的时候， miniConsole.js 只被加载一次。
// 
var miniConsole = (function(){
	var cache = [];
	var handler = function( ev ){
		if ( ev.keyCode === 113 ){
			var script = document.createElement( 'script' );
			script.onload = function(){
				for ( var i = 0, fn; fn = cache[ i++ ]; ){
					fn();
				}
			};
			script.src = 'miniConsole.js';
			document.getElementsByTagName( 'head' )[0].appendChild( script );
			document.body.removeEventListener( 'keydown', handler );// 只加载一次 miniConsole.js
		}
	};
	document.body.addEventListener( 'keydown', handler, false );
	return {
		log: function(){
			var args = arguments;
			cache.push( function(){
				return miniConsole.log.apply( miniConsole, args );
			});
		}
	}
})();
miniConsole.log( 11 ); // 开始打印 log
// miniConsole.js 代码
miniConsole = {
	log: function(){
	// 真正代码略
		console.log( Array.prototype.join.call( arguments ) );
	}
};