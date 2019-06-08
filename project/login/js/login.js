$(document).ready(function(){
	$("input").blur(function(){
		$(this).parent().find("span").remove();
	if($(this).is("#user")){
		if(this.value==""){
			var show=$("<span class='error'>请输入账号</span>")
		    $(this).parent().append(show);
		}
	}
	if($(this).is("#password")){
		if(this.value==""){
			var show=$("<span class='error'>请输入密码</span>")
		    $(this).parent().append(show);
		}
	}			
	})
	
})

class Login{
	constructor(){
		    this.user = document.querySelector("#user");
            this.pass = document.querySelector("#password");
            this.btn = document.querySelector("#btn");
            this.msg = document.querySelector(".msg");

            this.init()
	}
	init(){
		var that=this;
		this.btn.onclick=function(){
			that.getUserMsg()
			that.getValue()
		}
	}
	getUserMsg(){
		this.usermsg=localStorage.getItem("usermsg")?JSON.parse(localStorage.getItem("usermsg")) :[];
		this.check()
	}
	check(){
		for(var i=0;i<this.usermsg.length;i++){
			if(this.usermsg[i].user==this.user.value&&this.usermsg[i].pass==this.pass.value){
				this.usermsg[i].onff=1;
				
				localStorage.setItem("usermsg",JSON.stringify(this.usermsg))
				this.msg.innerHTML = "登录成功，即将跳转到首页"
				setTimeout(()=>{
					location.href="http://localhost/project/index.html"
				},2000);
				return;
			}console.log(this.usermsg[i].onff)
		}
		this.msg.innerHTML="账号密码不符，请重新登录，或去注册"
	}
	getValue(){
		if(this.user.value==""||this.pass.value==""){
			alert('请先输入账号或密码');
			return false;
		}
	}
}
new Login;
