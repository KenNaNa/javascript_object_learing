//创建安全模式
var saftyFactory = function(type,content){
	if(this instanceof saftyFactory ){
		//判断当前对象是否是工厂函数的实例化对象
		var s = new this[type](content);
		return s;
	}else{
		return new saftyFactory(type,content);
	}
}
saftyFactory.prototype = {
	//创建一个java类
	Java : function(content){
		this.content = content;
		(function(content){
			var oDiv = document.createElement('div');
			oDiv.innerHTML = content;
			document.getElementById('container').appendChild(oDiv);
		})(content);
	},
	//创建一个PHP类
	Php : function(content){
		this.content = content;
		(function(content){
			var oDiv = document.createElement('div');
			oDiv.innerHTML = content;
			oDiv.style.color = 'yellowblue';
			oDiv.style.backgroundColor = 'red';
			document.getElementById('container').appendChild(oDiv)
		})(content)
	},
	//创建一个javascript类
	Javascript : function(content){
		this.content = content;
		console.log(this);
		(function(content){
			var oDiv = document.createElement('div');
			oDiv.innerHTML = content;
			oDiv.style.backgroundColor = 'pink';
			document.getElementById('container').appendChild(oDiv);	
		})(content)
	},
	//创建一个C++类
	C : function(content){
		this.content = content;
		(function(content){
			var oDiv = document.createElement('div');
			oDiv.innerHTML = content;
			oDiv.style.color = 'blue';
			oDiv.style.backgroundColor = 'skyblue';
			document.getElementById('container').appendChild(oDiv);
		})(content)
	},
	//创建一个Ui类
	Ui : function(content){
		this.content = content;
		(function(content){
			var oDiv = document.createElement('div');
			oDiv.innerHTML = content;
			oDiv.style.color = 'blue';
			oDiv.style.backgroundColor = 'green';
			document.getElementById('container').appendChild(oDiv);
		})(content)
	},
	//创建一个Node类
	Node : function(content){
		this.content = content;
		(function(content){
			var oDiv = document.createElement('div');
			oDiv.innerHTML = content;
			oDiv.style.color = 'blue';
			oDiv.style.backgroundColor = 'greenblue';
			document.getElementById('container').appendChild(oDiv);
		})(content)
	},
	//创建一个NLP类
	NLP : function(content){
		this.content = content;
		(function(content){
			var oDiv = document.createElement('div');
			oDiv.innerHTML = content;
			oDiv.style.color = 'blue';
			oDiv.style.backgroundColor = 'green';
			document.getElementById('container').appendChild(oDiv);
		})(content)
	}

}