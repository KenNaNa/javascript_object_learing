var obj = {
    name: 'Ken',
    getname: function () {
        console.log(this);
        return this.name;
    }
};
console.log(obj.getname()); //'Ken'
console.log('-------------------------');
var getname = obj.getname;
console.log(getname()); //undefined
