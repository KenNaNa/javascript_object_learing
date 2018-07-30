var obj = {
	a : 1,
	geta(){
		console.log(this===obj);//true
		console.log(this.a);//true
	}
}
obj.geta();
/**
 * 当函数作为对象的方法被调用时，this 指向该对象
 */