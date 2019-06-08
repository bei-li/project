;(function($){
    "use strict";

    // 合并方法
    // $.banner = function(){}
    // $.fn.banner = function(){}
    // $.extend({banner:function(){}})
    // $.fn.extend({banner:function(){}})
    // $.extend($,{banner:function(){}})
    // $.extend($.fn,{banner:function(){}})

    $.fn.banner = function(options){
        var {list,items,left,right,autoPlay,delayTime,moveTime,index} = options;

        list = list===false ? false : true;
        autoPlay = autoPlay===false ? false : true;
        delayTime = delayTime || 2000;
        moveTime = moveTime || 200;
        index = index || 0;


        // 按钮的运动
        let move = function (direct){
            items.eq(iPrev).css({
                left:0
            }).stop().animate({
                left:items.eq(0).width() * direct
            },moveTime).end().eq(index).css({
                left:-items.eq(0).width() * direct
            }).stop().animate({
                left:0
            },moveTime)
            // B4.在按钮的功能中设置list的当前项
            if(list){
                $(".list").children().eq(iPrev).css({background:""}).end().eq(index).css({background:"red"});
            }
            // list && $(".list").children().eq(iPrev).css({background:""}).end().eq(index).css({background:"red"});
        }


        let iPrev = items.length-1;

        function rightEvent(){
            // B2-2.计算索引
            if(index == items.length-1){
                index = 0;
                iPrev = items.length-1
            }else{
                index++;
                iPrev = index-1;
            }
            // B3-2.开始运动
            move(-1)
        }
        function leftEvent(){
            // B2-1.计算索引
            if(index == 0){
                index = items.length-1;
                iPrev = 0
            }else{
                index--;
                iPrev = index + 1;
            }
            // B3-1.开始运动
            move(1)
        }
        
        if(left != undefined && left.length>0 && right != undefined && right.length>0){
            // 左右按钮的功能
            console.log("有左右按钮")
            // B1.绑定点击事件
            left.click(leftEvent);
            right.click(rightEvent);
        }

        if(list){
            // list的生成和布局
            console.log("有list按钮")
            // L1.根据图片的数量，生成对应的li
            var str = "";
            for(var i=0;i<items.length;i++){
                str += `<li>${i+1}</li>`
            }
            this.append($("<ul class='list'>").html(str));
            // L2.设置list的样式
            $(".list").css({
                width:"100%",
                height:30,
                background:"rgba(200,200,200,0.5)",
                position:"absolute",
                left:0,bottom:0,
                margin:0,listStyle:"none",padding:0,
                display:"flex"
            }).children().css({
                flex:1,
                borderLeft:"solid 1px black",
                borderRight:"solid 1px black",
                lineHeight:"30px",
                textAlign:"center"
            }).eq(index).css({
                background:"red"
            })

            // list的移动
            let move = function(direct,iPrev,iNow){
                items.eq(iPrev).css({
                    left:0
                }).stop().animate({
                    left:-items.eq(0).width() * direct
                },moveTime).end().eq(iNow).css({
                    left:items.eq(0).width() * direct
                }).stop().animate({
                    left:0
                },moveTime)
            }

            // L3.list的功能-绑定事件
            $(".list").children("li").click(function(){
                // L4.判断方向，计算索引
                if($(this).index() > index){
                    // console.log("left",index,$(this).index())
                    // L5-1.移动
                    move(1,index,$(this).index())
                }
                if($(this).index() < index){
                    // console.log("right",index,$(this).index())
                    // L5-2.移动
                    move(-1,index,$(this).index())
                }
                
                // L6.设置list的当前项
                $(".list").children("li").eq(index).css({background:""}).end().eq($(this).index()).css({background:"red"})

                // L7.点击移动之后，将点击的设置成下一次的当前
                index = $(this).index();
            })
        }

        // 是否自动播放
        if(autoPlay){
            let timer;
            // A1.开始自动播放，利用jq提供的模拟事件
            timer = setInterval(() => {
                // right.trigger("click")
                rightEvent()
            }, delayTime);

            // A2.鼠标进入和离开大框，分别停止和继续
            this.hover(function(){
                clearInterval(timer);
            },function(){
                timer = setInterval(() => {
                    // right.trigger("click")
                    rightEvent()
                }, delayTime);
            })
        }
    }
})(jQuery);