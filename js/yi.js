$(function() {
	var flag = false;
	var fl = false;
	$(".s1").click(function() {
		var username = $(".username").val();
		var reg = /^1[34578]\d{9}$/;
		if(username != "") {
			if(reg.test(username)) {
				flag = true;
			} else {
				alert("用户名格式不正确");
				flag = false;
			}
		} else {
			flag = false;
		}
		var pwd = $(".pwd").val();
		var reg1 = /^\w{6,}$/;
		if(pwd != "") {
			if(reg1.test(pwd)) {
				fl = true;
			} else {
				alert("密码必须大于6位")
				fl = false;
			}
		} else {
			fl = false;
		}
		if(flag && fl) {
			location.href = "主页.html";
		}
	})

})