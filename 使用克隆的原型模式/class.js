class Animal{
	constructor(name){
		this.name = name;
	}
	getName(){
		return this.name;
	}
	setName(name){
		this.name = name;
	}
}
class Dog extends Animal{
	constructor(name){
		super(name);
	}
	speak(){
		console.log('wangwang')
	}
}

var dog = new Dog('Ken');
console.log(dog.getName());
dog.speak()
console.log();