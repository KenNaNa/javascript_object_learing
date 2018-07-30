var People = function(name){
    this.name = name;
    this.instance = null;
}

People.prototype.getName = function(){
    return this.name;
}
People.prototype.getInstance = function(){
	if(!this.instance){
		this.instance = new People(this.name);
	}
    
    return this.instance;
}

var p = new People('Jin');
console.log(p.getName());
console.log(p.getInstance());