/**
 * 动画开始时，小球所在的原始位置；
 * 小球移动的目标位置；
 * 动画开始时的准确时间点；
 * 小球运动持续的时间。
 */
// 这些算法都接受 4 个参数，这 4 个参数的含义分别是动画已消耗的时间、小球原始位置、小
// 球目标位置、动画持续的总时间，返回的值则是动画元素应该处在的当前位置
// 缓动函数
var tween = {
	liear:function(t,b,c,d){
		return c*t/d+b;
	},
	easeIn:function(t,b,c,d){
		return c*(t/=d)*t+b;
	},
	strongEaseIn:function(t,b,c,d){
		return c * ( t /= d ) * t * t * t * t + b;
	},
	strongEaseOut:function(t,b,c,d){
		return c * ( ( t = t / d - 1) * t * t * t * t + 1 ) + b;
	},
	sineaseIn:function(t,b,c,d){
		return c * ( t /= d) * t * t + b;
	},
	sineaseOut:function(t,b,c,d){
		return c*((t=t/d-1)*t*t-1)+b;
	}
}
// 定义一个Animate类
// 接受一个参数即 即将动起来的DOM节点
var Animate = function(dom){
	this.dom = dom;//进行运动的DOM元素
	this.startTime = 0;//动画开始时间
	this.startPos = 0;//动画开始的位置
	this.endPos = 0;//动画结束的位置
	this.propertyName = null;//DOM节点需要被修改的CSS属性
	this.easing = null;//缓动算法
	this.duration = null;//动画持续时间
}

//接下来就是使用Animate.prototype.start()来启动动画
Animate.prototype.start = function(propertyName,endPos,duration,easing){
	this.startTime = +new Date;//动画启动时间
	this.startPos = this.dom.getBoundingClientRect()[propertyName];//DOM节点的起始位置
	console.log(this.dom.getBoundingClientRect());
	this.propertyName = propertyName;//CSS属性
	this.endPos = endPos;//DOM节点的结束位置
	this.duration = duration;//动画持续的时间
	this.easing = tween[easing];//缓动算法

	var self = this;
	var timer = setInterval(function(){//启动动画定时器
		if(self.step()===false){//如果动画已经结束，清除定时器
			clearInterval(timer);
			timer = null;
		}
	},19);
} 

// 再接下来是 Animate.prototype.step 方法，该方法代表小球运动的每一帧要做的事情
// 这个方法负责计算小球的当前位置和调用更新 CSS 属性值的方法 Animate.prototype.update。
Animate.prototype.step = function(){
	var t = +new Date;//获取当前时间
	if(t>=this.startTime+this.duration){
		this.update(this.endPos);//更新DOM的位置
		return false;
	}

	var pos = this.easing(t-this.startTime,this.startPos,this.endPos-this.startPos,this.duration);
	// pos为当前位置
	this.update(pos);
}

// 
Animate.prototype.update = function(pos){
	this.dom.style[this.propertyName] = pos + 'px';
}

