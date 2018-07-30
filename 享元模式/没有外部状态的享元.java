// java代码
public class Test{
	public static void main(String args[]){
		String a1 = new String('a').intern();
		String a2 = new String('a').intern();
		System.out.println(a1===a2);//true;
	}

}

// 在这段 Java 代码里，分别 new 了两个字符串对象 a1 和 a2。 intern 是一种对象池技术， new
// String("a").intern()的含义如下。
//  如果值为 a 的字符串对象已经存在于对象池中，则返回这个对象的引用
//  反之，将字符串 a 的对象添加进对象池，并返回这个对象的引用。
// 所以 a1 == a2 的结果是 true，但这并不是使用了享元模式的结果，享元模式的关键是区别内部
// 状态和外部状态。享元模式的过程是剥离外部状态，并把外部状态保存在其他地方，在合适的时刻
// 再把外部状态组装进共享对象。这里并没有剥离外部状态的过程， a1 和 a2 指向的完全就是同一个对
// 象，所以如果没有外部状态的分离，即使这里使用了共享的技术，但并不是一个纯粹的享元模式