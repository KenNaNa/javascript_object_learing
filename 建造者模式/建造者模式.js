//创建一个人类
var Human = function(param){
	//技能
	this.skill = param&&param.skill || '保密';
	//喜好
	this.hobby = param&&param.hobby || '保密';
}
Human.prototype.getSkill = function(){
	return this.skill;
}
Human.prototype.getHobby = function(){
	return this.hobby;
}
//创建一个实例化名字类
var Named = function(name){
	var that = this;
	(function(name,that){
		that.wholeName = name;
		if(name.indexOf(' ')>-1){
			that.FirstName = name.slice(0,name.indexOf(' '));
			that.SecondName = name.slice(name.indexOf(' '));
		}
	})(name,that);
}
//实例化职位
var Work = function(work){
	var that = this;
	(function(work,that){
		switch(work){
			case 'code': 
					that.work = '工程师';
					that.workDescription = '每天沉醉于编程';
		    break;
		    case 'UI':
		    		that.work = 'UI设计师';
		    		that.workDescription = '每天沉醉于设计想象';
		    break;
		    case 'UE':
		    		that.work  = '设计师';
		    		that.workDescription = '设计更像一种艺术啊';
		    break;
		    case 'teach':
		    		that.work = '教师';
		    		that.workDescription = '分享也是一种快乐';
		    break;
		    default :
		    		that.work = work;
		    		that.workDescription = '对不起,我们还不清楚您所选择的职位的相关描述';
		}
	})(work,that)
}
Work.prototype.changeWork = function(work){
	this.work = work;
}
Work.prototype.changeDescription = function(sentence){
	this.workDescription = sentence;
}
/**
 * 
 */

var Person = function(name,work){
	var _person = new Human();//创建应聘者缓存对象
	 _person.name = new Named(name);//创建应聘者姓名解析对象
	 _person.work = new Work(work);//创建应聘者期望的职位
	return _person;//将对象返回
}