闭包是一个非常强大的特性，但人们对其也有诸多误解。一种耸人听闻的说法是闭包会造成
内存泄露，所以要尽量减少闭包的使用。
局部变量本来应该在函数退出的时候被解除引用，但如果局部变量被封闭在闭包形成的环境
中，那么这个局部变量就能一直生存下去。从这个意义上看，闭包的确会使一些数据无法被及时
销毁。使用闭包的一部分原因是我们选择主动把一些变量封闭在闭包中，因为可能在以后还需要
使用这些变量，把这些变量放在闭包中和放在全局作用域，对内存方面的影响是一致的，这里并
不能说成是内存泄露。如果在将来需要回收这些变量，我们可以手动把这些变量设为 null。
跟闭包和内存泄露有关系的地方是，使用闭包的同时比较容易形成循环引用，如果闭包的作
用域链中保存着一些 DOM 节点，这时候就有可能造成内存泄露。但这本身并非闭包的问题，也
并非 JavaScript 的问题。在 IE 浏览器中，由于 BOM 和 DOM 中的对象是使用 C++以 COM 对象
的方式实现的，而 COM 对象的垃圾收集机制采用的是引用计数策略。在基于引用计数策略的垃
图灵社区会员 轩辕 专享 尊重版权44 第 3 章 闭包和高阶函数
圾回收机制中，如果两个对象之间形成了循环引用，那么这两个对象都无法被回收，但循环引用
造成的内存泄露在本质上也不是闭包造成的。
同样，如果要解决循环引用带来的内存泄露问题，我们只需要把循环引用中的变量设为 null
即可。将变量设置为 null 意味着切断变量与它此前引用的值之间的连接。当垃圾收集器下次运
行时，就会删除这些值并回收它们占用的内存。