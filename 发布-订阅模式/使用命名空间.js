// 在提供最终的代码之前，我们来感受一下怎么使用这两个新增的功能。
// /************** 先发布后订阅 ********************/
// Event.trigger( 'click', 1 );
// Event.listen( 'click', function( a ){
// console.log( a ); // 输出： 1
// });
// /************** 使用命名空间 ********************/
// Event.create( 'namespace1' ).listen( 'click', function( a ){
// console.log( a ); // 输出： 1
// });
// Event.create( 'namespace1' ).trigger( 'click', 1 );
// Event.create( 'namespace2' ).listen( 'click', function( a ){
// console.log( a ); // 输出： 2
// });
// Event.create( 'namespace2' ).trigger( 'click', 2 );


var Event = (function(){
	var global = this;
	var Event;
	var _default = "default";

	Event = (function(){
		var _listen;
		var _trigger;
		var _remove;
		var _slice = Array.prototype.slice;
		var _shift = Array.prototype.shift;
		var _unshift = Array.prototype.unshift;
		var namespaceCache = {};
		var _create,
		var find;
		var each = function(ary,fn){
			var ret;
			for(var i=0;i<ary.length;i++){
				var n = ary[i];
				ret = fn.call(n,i,n);
			}
			return ret;
		}


		_listen = function(key,fn,cache){
			if(!cache[key]){
				cache[key] = [];
			}
			cache[key].push(fn);
		}


		_remove = function(key,fn,cache){
			if(cache[key]){
				if(fn){
					for(var l=cache[key].length-1;l>=0;l--){
						if(cache[key][l]===fn){
							cache[key].splice(l,1);
						}
					}
				}else{
					cache[key] = [];
				}
			}
		}

		_trigger = function(){
			var cache = _shift.call(arguments);
			var key = _shift.call(arguments);
			var args = arguments;
			var _self = this;
			var ret;
			var stack = cache[key];

			if(!stack || !stack.length){
				return ;
			}


			return each(stack,function(){
				return this.apply(_self,arguments);
			})
		}


		_create = function(namespace){
			var namespace = namespace || _default;
			var cache = {};
			var offlineStack = [];//离线栈
			var ret = {
				listen:function(key,fn,last){
					_listen(key,fn,cache);
					if(offlineStack===null){
						return ;
					}
					if(last==='last'){
						offlineStack.length && offlineStack.pop();
					}else{
						each(offlineStack,function(){
							this();
						})
					}
					offlineStack = null;
				},


				one:function(key,fn,last){
					_remove(key,cache);
					this.listen(key,fn,last);
				},


				remove:function(key,fn){
					_remove(key,fn,cache);
				},


				trigger:function(){
					var fn;
					var args;
					var _self = this;

					_unshift.call(arguments,cache);
					args = arguments;
					fn = function(){
						return _trigger.apply(_self,args);
					}

					if(offlineStack){
						return offlineStack.push(fn);
					}

					return fn();
				}
			}
			return namespace?(namespaceCache[namespace]?namespaceCache[namespace]:namespaceCache[namespace]=ret):ret;
		}
		return {
			create:_create,
			one:function(key,fn,last){
				var event = this.create();
				event.one(key,fn,last);
			},

			remove:function(key,fn){
				var event = this.create();
				event.remove(key,fn);
			},

			listen:function(key,fn,last){
				var event = this.create();
				event.listen(key,fn,last);
			},

			trigger:function(){
				var event = this.create();
				event.trigger.apply(this,arguments);
			}
		}
	})()

	return Event;
})()