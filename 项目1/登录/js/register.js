$(document).ready(function(){
	$("form :input[type!='checkbox']").blur(function(){
		$(this).parent().find("span").remove();
		if($(this).is("#user")){
			if(this.value==""){
				var show=$("<span class='error'>用户名不能为空</span>")
			     $(this).parent().append(show)
               }else if(this.value.length<3){
               	var show=$("<span class='error'>用户名不能少于3位</span>")
			     $(this).parent().append(show)
               }else{
               	 	var show=$("<span class='right'>正确</span>")
			     $(this).parent().append(show)
               }
            }
		if($(this).is("#password")){
			if(this.value==""){
				var show=$("<span class='error'>密码不能为空</span>")
			     $(this).parent().append(show)
			}else if(this.value.length<6){
				var show=$("<span class='error'>密码长度不能少于6位</span>")
			     $(this).parent().append(show)
			}else{
				var show=$("<span class='right'>正确</span>")
			     $(this).parent().append(show)
			}
		}
		
		if($(this).is("#passwords")){
			if(this.value==""){
			 var show=$("<span class='error'>确认密码不能为空</span>")
			     $(this).parent().append(show)	
			}else if(this.value!=$("#password").val()){
				var show=$("<span class='error'>两次密码不符</span>")
			     $(this).parent().append(show)
			}else{
				var show=$("<span class='right'>正确</span>")
			     $(this).parent().append(show)
			}
		}
	})
	
	$("form :checkbox").click(function(){
		if(!$(this).prop('checked')){
			var show=$("<span class='error'>同意协议才能注册</span>")
			$(this).parent().append(show)
		}else{
			$(this).parent().find("span").remove()
		}
	}) 
})
     
class Register{
	constructor(){
		this.user=document.getElementById("user")
		this.pass=document.getElementById("password")
		this.opass=document.getElementById("passwords")
		this.btn=document.getElementById("btn")
		this.msg=document.querySelector(".msg")
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
		this.usermsg=localStorage.getItem("usermsg")
		this.setUserMsg()
	}
	setUserMsg(){
		if(this.usermsg==null){
			this.usermsg=[{
				user:this.user.value,
				pass:this.pass.value,
				opass:this.opass.value,
				onoff:0
			}]
			this.msg.innerHTML=""
		}else{
			this.usermsg=JSON.parse(localStorage.getItem("usermsg"));
			for(var i=0;i<this.usermsg.length;i++){
				if(this.usermsg[i].user==this.user.value){
					this.msg.innerHTML="重名";
					return;
				}
			}
			this.msg.innerHTML="";
			this.usermsg.push({
				user:this.user.value,
				pass:this.pass.value,
				opass:this.opass.value,
				onoff:0
			})
		}
		localStorage.setItem("usermsg",JSON.stringify(this.usermsg))
	
	}
	
	
	getValue(){
		if(this.user.value==""||this.pass.value==""||this.opass.value==""){
			return false;
		}else{
			alert('注册成功');
		}
	}
	
	
	
}
	
	
	
	
new Register();



	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

