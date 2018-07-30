var toolTipFactory = (function(){
	var toolTipPool = [];//toolTip对象池
	return {
		create:function(){
			if(toolTipPool.length===0){//如果对象池为空，就创建一个DOM
				var div = document.createElement('div');
				document.body.appendChild(div);
				return div;
			}else{//如果对象池不为空
				return toolTipPool.shift();//则从对象池中一个DOM元素
			}
		},
		recover:function(tooltipDom){
			return toolTipPool.push(tooltipDom)// 对象池回收 dom
		}
	}
})()

// 现在把时钟拨回进行第一次搜索的时刻，目前需要创建 2 个小气泡节点，为了方便回收，用
// 一个数组 ary 来记录它们：
var ary = [];

for ( var i = 0, str; str = [ 'A', 'B' ][ i++ ]; ){
	var toolTip = toolTipFactory.create();
	toolTip.innerHTML = str;
	ary.push( toolTip );
};

// 如果你愿意稍稍测试一下，可以看到页面中出现了 innerHTML 分别为 A 和 B 的两个 div 节点。
// 接下来假设地图需要开始重新绘制，在此之前要把这两个节点回收进对象池：

for ( var i = 0, toolTip; toolTip = ary[ i++ ]; ){
	toolTipFactory.recover( toolTip );
};

// 再创建 6 个小气泡：
for ( var i = 0, str; str = [ 'A', 'B', 'C', 'D', 'E', 'F' ][ i++ ]; ){
	var toolTip = toolTipFactory.create();
	toolTip.innerHTML = str;
};

// 现在再测试一番，页面中出现了内容分别为 A、 B、 C、 D、 E、 F 的 6 个节点，上一次创建
// 好的节点被共享给了下一次操作。对象池跟享元模式的思想有点相似， 虽然 innerHTML 的值 A、 B、
// C、 D 等也可以看成节点的外部状态，但在这里我们并没有主动分离内部状态和外部状态的过程。