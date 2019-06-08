class Commodities{
	constructor(){
		 this.main=document.getElementById("main");
		
	 this.c=document.querySelector(".commodities");
	 this.url ="http://localhost/project/data/main.json"
     this.init()
	}
	init(){
		var that=this;
		ajax({
			url:this.url,
			success:function(res){
				that.res=JSON.parse(res)
				
			that.display()
			}
		})
		
	}
	display(){
		var str="";
		for(var i=0;i<this.res.length;i++){
			str+=`<div class="box" index="${this.res[i].Id}">
			<img src="${this.res[i].src}">
			<p>${this.res[i].name}<span>${this.res[i].names}</span></p>
			<i>${this.res[i].price}<b>${this.res[i].prices}</b></i>
			</div>`
		}
		this.c.innerHTML =str;
	}
}
new Commodities;

 class Index{
        constructor(){
            this.notLogin = document.querySelector(".not-login")
            this.loginS = document.querySelector(".login-success")
            this.user = document.querySelector(".login-success span")

            this.logout = document.querySelector(".logout");
           
            this.init();
            this.addEvent();
        }
        addEvent(){
            this.logout.onclick = ()=>{
                for(var i=0;i<this.usermsg.length;i++){
                    if(this.name == this.usermsg[i].user){
                        this.usermsg[i].onoff = 0;
                        this.notLogin.style.display = "block";
                        this.loginS.style.display = "none";
                        localStorage.setItem("usermsg",JSON.stringify(this.usermsg))
                        return ;
                    }
                }
            }
        }
        init(){
        	
            this.usermsg = localStorage.getItem("usermsg") ? JSON.parse(localStorage.getItem("usermsg")) : [];
            this.check()
        }
        check(){
            for(var i=0;i<this.usermsg.length;i++){ 
            	console.log(this.usermsg[i].onoff)
                if(this.usermsg[i].onoff == 0){
                    this.notLogin.style.display = "none";
                    this.loginS.style.display = "block";
                    this.user.innerHTML = this.usermsg[i].user;
                    this.name = this.usermsg[i].user;
                   
                    return;
                } 
               
            }
        }
    }

new Index; 
    
   
