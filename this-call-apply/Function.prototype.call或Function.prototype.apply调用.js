var obj = {
	name : 'Ken',
	getName(){
		return this.name;
	},
	setName(name){
		this.name = name;
	}
}

var obj1 = {
	name : 'nana',
}
console.log(obj1.name);//nana
console.log(obj.name);//Ken

console.log(obj.getName())//Ken
console.log(obj.getName.call(obj1))//nana