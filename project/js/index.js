 ;$("#banner").banner({
        items:$("#banner .imgbox").children(),
        left:$("#banner #left"),
        right:$("#banner #right"),
        list:false,
        autoPlay:true
    });
    
   
    
    
    
 
    
    
    
    
    
    
    
    
    
    
    
      
class Pie{
	constructor(){
		this.p=document.querySelector(".pie-r")
		this.url="http://localhost/project/data/pies.json"
	    this.init()
	    this.addEvent()
	}
	init(){
		var that=this;
		ajax({
			url:this.url,
			success:function(res){
				that.res = JSON.parse(res)
				that.display()
				
			}
		})
	}
	display(){
		var str="";
		for(var i=0;i<this.res.length;i++){
		    str += `<div class="box" index="${this.res[i].Id}">
				<img class="detail" src="${this.res[i].src}">
				<p>${this.res[i].name}<span>${this.res[i].names}</span></p>
			   <i>${this.res[i].price}<b>${this.res[i].prices}</b></i>
				<em class="btn">加入购物车</em>
				</div>`
				}
				this.p.innerHTML = str;
				
	}
	
	addEvent(){
			var that = this
			this.p.addEventListener("click",function(eve){
				var e = eve||window.event;
				var target = e.target||e.srcElement;
				if(target.className=="btn"){
					console.log(target.parentNode.getAttribute("index"))
					that.id = target.parentNode.getAttribute("index")
                   that.Cookie()
				}
				})
			this.p.addEventListener("click",function(eve){
				var e = eve||window.event;
				var target = e.target||e.srcElement;
				if(target.className=="detail"){
					location.href="details/detail.html"
				}
				})
		}
		Cookie(){
			this.goods = getCookie("shangpin");
			if(this.goods){
				this.goods = JSON.parse(this.goods)
				var onoff =true
				for(var i=0;i<this.goods.length;i++){
					if(this.goods[i].id==this.id){
						this.goods[i].num++;
						onoff = false
					}
				}
				if(onoff){
					this.goods.push({
						id:this.id,
						num:1
					})
				}
			}else{
				this.goods=[{
					id:this.id,
					num:1
				}]
			}
			setCookie("shangpin",JSON.stringify(this.goods))
		}
	
}
	
	
new Pie();
	
	
class Meat{
	constructor(){
		this.m=document.querySelector(".meat-r")
		this.url="http://localhost/project/data/meat.json"
	    this.init()
	}
	init(){
		var that=this;
		ajax({
			url:this.url,
			success:function(res){
				that.res = JSON.parse(res)
				that.display()
			}
		})
	}
	display(){
		var str="";
		for(var i=0;i<this.res.length;i++){
		    str += `<div class="box" index="${this.res[i].Id}">
				<img src="${this.res[i].src}">
				<p>${this.res[i].name}<span>${this.res[i].names}</span></p>
			   <i>${this.res[i].price}<b>${this.res[i].prices}</b></i>
				<em class="btn">加入购物车</em>
				</div>`
				}
				this.m.innerHTML = str;
	}
	
}
new Meat;
//3f
class Specialty{
	constructor(){
		this.s=document.querySelector(".spe-r")
		this.url="http://localhost/project/data/spe.json"
	    this.init()
	}
	init(){
		var that=this;
		ajax({
			url:this.url,
			success:function(res){
				that.res = JSON.parse(res)
				that.display()
			}
		})
	}
	display(){
		var str="";
		for(var i=0;i<this.res.length;i++){
		    str += `<div class="box" index="${this.res[i].Id}">
				<img src="${this.res[i].src}">
				<p>${this.res[i].name}<span>${this.res[i].names}</span></p>
			   <i>${this.res[i].price}<b>${this.res[i].prices}</b></i>
				<em class="btn">加入购物车</em>
				</div>`
				}
				this.s.innerHTML = str;
	}
	
}
new Specialty;


//4f


class Item{
	constructor(){
		this.s=document.querySelector(".item")
		this.url="http://localhost/project/data/item.json"
	    this.init()
	}
	init(){
		var that=this;
		ajax({
			url:this.url,
			success:function(res){
				that.res = JSON.parse(res)
				that.display()
			}
		})
	}
	display(){
		var str="";
		for(var i=0;i<this.res.length;i++){
		    str += `<div class="box" index="${this.res[i].Id}">
				<img src="${this.res[i].src}">
				<p>${this.res[i].name}<span>${this.res[i].names}</span></p>
			   <i>${this.res[i].price}<b>${this.res[i].prices}</b></i>
				<em class="btn">加入购物车</em>
				</div>`
				}
				this.s.innerHTML = str;
	}
	
}
new Item;

//5f
class Snacks{
	constructor(){
		this.s=document.querySelector(".snacks")
		this.url="http://localhost/project/data/snacks.json"
	    this.init()
	}
	init(){
		var that=this;
		ajax({
			url:this.url,
			success:function(res){
				that.res = JSON.parse(res)
				that.display()
			}
		})
	}
	display(){
		var str="";
		for(var i=0;i<this.res.length;i++){
		    str += `<div class="box" index="${this.res[i].Id}">
				<img src="${this.res[i].src}">
				<p>${this.res[i].name}<span>${this.res[i].names}</span></p>
			   <i>${this.res[i].price}<b>${this.res[i].prices}</b></i>
				<em class="btn">加入购物车</em>
				</div>`
				}
				this.s.innerHTML = str;
	}
	
}
new Snacks;
class Tea{
	constructor(){
		this.s=document.querySelector(".tea")
		this.url="http://localhost/project/data/tea.json"
	    this.init()
	}
	init(){
		var that=this;
		ajax({
			url:this.url,
			success:function(res){
				that.res = JSON.parse(res)
				that.display()
			}
		})
	}
	display(){
		var str="";
		for(var i=0;i<this.res.length;i++){
		    str += `<div class="box" index="${this.res[i].Id}">
				<img src="${this.res[i].src}">
				<p>${this.res[i].name}<span>${this.res[i].names}</span></p>
			   <i>${this.res[i].price}<b>${this.res[i].prices}</b></i>
				<em class="btn">加入购物车</em>
				</div>`
				}
				this.s.innerHTML = str;
	}
	
}
new Tea;
//7f
class Marine{
	constructor(){
		this.s=document.querySelector(".marine")
		this.url="http://localhost/project/data/mar.json"
	    this.init()
	}
	init(){
		var that=this;
		ajax({
			url:this.url,
			success:function(res){
				that.res = JSON.parse(res)
				that.display()
			}
		})
	}
	display(){
		var str="";
		for(var i=0;i<this.res.length;i++){
		    str += `<div class="box" index="${this.res[i].Id}">
				<img src="${this.res[i].src}">
				<p>${this.res[i].name}<span>${this.res[i].names}</span></p>
			   <i>${this.res[i].price}<b>${this.res[i].prices}</b></i>
				<em class="btn">加入购物车</em>
				</div>`
				}
				this.s.innerHTML = str;
	}
	
}
new Marine;
class Gift{
	constructor(){
		this.s=document.querySelector(".gift")
		this.url="http://localhost/project/data/gift.json"
	    this.init()
	}
	init(){
		var that=this;
		ajax({
			url:this.url,
			success:function(res){
				that.res = JSON.parse(res)
				that.display()
			}
		})
	}
	display(){
		var str="";
		for(var i=0;i<this.res.length;i++){
		    str += `<div class="box" index="${this.res[i].Id}">
				<img src="${this.res[i].src}">
				<p>${this.res[i].name}<span>${this.res[i].names}</span></p>
			   <i>${this.res[i].price}<b>${this.res[i].prices}</b></i>
				<em class="btn">加入购物车</em>
				</div>`
				}
				this.s.innerHTML = str;
	}
	
}
new Gift;