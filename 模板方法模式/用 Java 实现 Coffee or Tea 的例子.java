public abstract class Beverage{
	// 饮料抽象类
	// 模板方法
	final void init(){
		boilWater();
		brew();
		pourInCup();
		addCondiments();
	}

	void boilWater(){
		System.out.printIn('把水煮沸');
	}

	abstract void brew();//抽象方法brew
	abstract void addCondiments();//抽象方法
	abstract void pourInCup();//
}

public class Coffee extends Beverage{
	@Override
	void brew(){
		System.out.printIn('用沸水冲泡咖啡');
	}


	@Override
	void pourInCup(){
		System.out.printIn('把咖啡倒进杯子');
	}


	@Override 
	void addCondiments(){
		System.out.printIn('加糖和牛奶');
	}
}

public class Tea extends Beverage{
	@Override
	void brew(){
		System.out.printIn('用沸水冲泡茶叶');
	}


	@Override
	void pourInCup(){
		System.out.printIn('把茶倒进杯子');
	}


	@Override 
	void addCondiments(){
		System.out.printIn('加柠檬');
	}
}


public class Test{
	private static void prepareRecipe(Beverage beverage){
		beverage.init();
	}

	public static void main( String args[] ){
		Beverage coffee = new Coffee(); // 创建 coffee 对象
		prepareRecipe( coffee ); // 开始泡咖啡
		// 把水煮沸
		// 用沸水冲泡咖啡
		// 把咖啡倒进杯子
		// 加糖和牛奶
		Beverage tea = new Tea(); // 创建 tea 对象
		prepareRecipe( tea ); // 开始泡茶
		// 把水煮沸
		// 用沸水浸泡茶叶
		// 把茶倒进杯子
		// 加柠檬
	}
	
}