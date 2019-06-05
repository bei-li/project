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
//			2.获取元素
			this.sBox = document.querySelector(".s_box")
			this.bBox = document.querySelector(".b_box")
			this.span = document.querySelector(".s_box span")
			this.bImg = document.querySelector(".b_box img")
//			3.绑定事件
			this.init()
		}
	
