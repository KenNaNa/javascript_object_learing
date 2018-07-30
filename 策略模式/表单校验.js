// 用户名不能为空。
// 密码长度不能少于 6 位。
// 手机号码必须符合格式。
//表单校验的第一个版本
var registerForm = document.getElementById('registerForm');
registerForm.onsubmit = function(){
	if(registerForm.userName.value===''){
		console.log('用户名不能为空。');
		return false;
	}

	if(registerForm.password.value.length<6){
		console.log('密码不能小于6位');
		return false;
	}

	if ( !/(^1[3|5|8][0-9]{9}$)/.test( registerForm.phoneNumber.value ) ){
		alert ( '手机号码格式不正确' );
		return false;
	}
}

//  registerForm.onsubmit 函数比较庞大，包含了很多 if-else 语句，这些语句需要覆盖所有
// 的校验规则。
//  registerForm.onsubmit 函数缺乏弹性，如果增加了一种新的校验规则，或者想把密码的长
// 度校验从 6 改成 8，我们都必须深入 registerForm.onsubmit 函数的内部实现，这是违反开
// 放—封闭原则的。
//  算法的复用性差，如果在程序中增加了另外一个表单，这个表单也需要进行一些类似的
// 校验，那我们很可能将这些校验逻辑复制得漫天遍野。