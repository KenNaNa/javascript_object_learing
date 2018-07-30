var Minjia = function(name){
	this.name = name;
}
Minjia.prototype.dead = function(){
	console.log(this.name+'死亡!!!');
}

var asuma = new Minjia('阿斯玛');
var Undead = function(name){
	this.name = name;
	this.target = null;
}
Undead.prototype.getBlood = function(minjia){
	if(minjia instanceof Minjia){
		this.target = minjia;
	}
}
Undead.prototype.dead = function(){
	console.log(this.name+'死亡!!!');
}
Undead.prototype.curse = function(){
	if(this.target!==null){
		console.log('开始法式');
		this.dead();
		this.target.dead();
		console.log(this.name+'复活');
	}else{
		this.dead();
	}
}