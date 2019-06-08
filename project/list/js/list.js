class List{
	constructor(){
		
	 this.c=document.querySelector(".allgoods");
	 this.url ="http://localhost/project/list/data/list.json"
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
			<img class="img" src="${this.res[i].src}">
			<p>${this.res[i].name}<span>${this.res[i].names}</span></p>
			<i>${this.res[i].price}<b>${this.res[i].prices}</b></i>
			</div>`
		}
		this.c.innerHTML =str;
		this.addEvent()
	}
	
	addEvent(){
				var that = this;
				this.c.addEventListener("click",function(eve){
					var e = eve||window.event;
				   var target = e.target||e.srcElement;
					
					if(target.className=="img"){
						location.href="http://localhost/project/details/detail.html"
						}
					})
			}	
}
new List;
 