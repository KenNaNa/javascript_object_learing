var obj = {
	name : 'Ken',
	getname(){
		console.log(this);
		return this.name;
		
	}
}

console.log(obj.getname());//'Ken'
console.log('-------------------------')
var getname = obj.getname;
console.log(getname());//undefined
// 此时的this指向了window