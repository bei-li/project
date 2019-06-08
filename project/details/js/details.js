var ali = document.querySelectorAll(".smallbox li");
var amsg = document.querySelectorAll(".bigbox .bigimg")
		for(var i=0;i<ali.length;i++){
			ali[i].setAttribute("xuhao",i)
			ali[i].onclick=function(){
				for(var j=0;j<ali.length;j++){
					ali[j].className="";
					amsg[j].style.display = "none"
				}
				this.className="active"
				var index =this.getAttribute("xuhao")
				amsg[index].style.display = "block"
			};
		}



	function Magnifier(){

			this.sBox = document.querySelector(".s_box")
			this.sImg = document.querySelector(".s_box img")
			this.bBox = document.querySelector(".b_box")
			this.span = document.querySelector(".s_box span")
			this.bImg = document.querySelector(".b_box img")
			this.init()
		}
		Magnifier.prototype.init = function(){
			var that = this;

			this.sBox.onmouseover = function(){
				that.show()
			}
			this.sBox.onmouseout = function(){
					that.hide()
			}
			this.sBox.onmousemove = function(eve){
				var e = eve || window.event
				that.move(e)
			}
		}
		Magnifier.prototype.move = function(e){
			var l = e.pageX - this.sBox.offsetLeft - this.span.offsetWidth/2;
			var t = e.pageY - this.sBox.offsetTop - this.span.offsetHeight/2;
			

			if(l<0) l=0;
			if(t<0) t=0;
			if(l > this.sBox.offsetWidth - this.span.offsetWidth){
				l = this.sBox.offsetWidth - this.span.offsetWidth;
			}
			if(t > this.sBox.offsetHeight - this.span.offsetHeight){
				t = this.sBox.offsetHeight - this.span.offsetHeight;
			}
			

			this.span.style.left = l + "px";
			this.span.style.top = t + "px";
			var x = l/(this.sBox.offsetWidth - this.span.offsetWidth);
			var y = t/(this.sBox.offsetHeight - this.span.offsetHeight);
			this.bImg.style.left = x * -(this.bImg.offsetWidth-this.bBox.offsetWidth) + "px";
			this.bImg.style.top = y * -(this.bImg.offsetHeight-this.bBox.offsetHeight) + "px";
			
			
			this.span.style.backgroundPosition = -l+"px "+ -t +"px";
		}
		Magnifier.prototype.show = function(){
			this.span.style.display = "block";
			this.bBox.style.display = "block";
			
			this.sImg.style.opacity = 0.6;
		}
		Magnifier.prototype.hide = function(){
			this.span.style.display = "none";
			this.bBox.style.display = "none";
			
			this.sImg.style.opacity = 1;
		}
		
		new Magnifier();