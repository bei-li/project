class Car{
	constructor(){
		this.tbody=document.querySelector(".tbody")
		this.url="http://localhost/project/data/pies.json"
	   this.init()
	   this.addEvent()
	}
	init(){
				var that = this;
				ajax({
					url:this.url,
					success:function(res){
						that.res = JSON.parse(res)
						that.getCookie()
					}
				})
				
			}
	getCookie(){
		this.goods = JSON.parse(getCookie("shangpin"))
			this.display()
	}
	display(){
//			console.log(this.res)
//			
//			console.log(this.goods)
             var str ="";
             for(var i=0;i<this.res.length;i++){
             	for(var j=0;j<this.goods.length;j++){
             		if(this.res[i].Id==this.goods[j].id){
             			str+=`<tr>
             			     <td><input type="checkbox"></td>
             			     <td><img src="${this.res[i].src}"></td>
             			     <td>${this.res[i].name}</td>
             			      <td>${this.res[i].price}</td>
             			      <td><input type="number" value="${this.goods[j].num}" min=1></td>
             			     <td><span class="delete">删除</span></td>
             			</tr>`
             		}
             	}
             }
             this.tbody.innerHTML =str
			}
	addEvent(){
				var that = this;
				this.tbody.addEventListener("click",function(eve){
					var e = eve||window.event;
				   var target = e.target||e.srcElement;
					
					if(target.className=="delete"){
						//console.log(target.parentNode.getAttribute("index"))
						console.log(target.getAttribute("index"))
						that.id=target.parentNode.parentNode.getAttribute("index")
						target.parentNode.parentNode.remove()
						that.changeCookie(function(i){
							that.goods.splice(i,1)
						})
						}
					})
				

				this.tbody.addEventListener("input",function(eve){
					var e = eve||window.event;
				   var target = e.target||e.srcElement;
					if(target.type=="number"){
						that.id=target.parentNode.parentNode.getAttribute("index")
						that.changeCookie(function(i){
							that.goods[i].num = target.value
						})
					}
				})
	}
		
			changeCookie(callback){
				for(var i=0;i<this.goods.length;i++){
					if(this.goods[i].id==this.id){
						callback(i)
						break;
					}
				}
				setCookie("shangpin",JSON.stringify(this.goods))
			}
}

new Car()
