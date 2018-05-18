$(function(){
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
	$(".content").css({"font-size":document.documentElement.style.fontSize});
	var font=document.documentElement.style.fontSize.substring(0,document.documentElement.style.fontSize.length-2)*0.25+"px";
	$(".page_3_photos>div").css({"font-size":font});
	$(".page_7_photos>div").css({"font-size":font});
	$(".page_9_photos_1,.page_9_photos_2,.page_9_photos_3,.page_9_photos_4,.page_9_photos_5,.page_9_photos_6").css({"font-size":font});
	textMove($(".page_1_tip_1"),"11.636364%","1",0);
	textMove($(".page_1_tip_2"),"19.454545%","1",200);
	robortMove($(".blue"),"33.733333%");
	robortMove($(".pink"),"50.8%");
	var time_1=0;
	var time_2=0;
	var time_3=0;
	var time_4=0;
	var time_5=0;
	var time_6=0;
	var time_7=0;
	var time_8=0;
	var time_9=0;
	$(window).scroll(function(){
		//第一个界面的动画
		if($(document).scrollTop()>1/2*($(".page_2").offset().top)){
			$(".page_1_tip_1").stop();
			$(".page_1_tip_2").stop();
			$(".blue").stop();
			$(".pink").stop();
			$(".page_1_tip_1").css({"top":"13.636364%","opacity":"0"});
			$(".page_1_tip_2").css({"top":"21.454545%","opacity":"0"});
			$(".blue").css({"left":"31.733333%"});
			$(".pink").css({"left":"52.8%"});
			time_1=0;
		}else{
			if(time_1==0){
				$(".page_1_tip_1").stop();
				$(".page_1_tip_2").stop();
				$(".blue").stop();
				$(".pink").stop();
				textMove($(".page_1_tip_1"),"11.636364%","1",0);
				textMove($(".page_1_tip_2"),"19.454545%","1",200);
				robortMove($(".blue"),"33.733333%");
				robortMove($(".pink"),"50.8%");
				time_1++;
			}
			
		}
		//第二个界面的动画
		if($(document).scrollTop()<1/11*($(".page_2").offset().top)||$(document).scrollTop()>3/4*($(".page_3").offset().top)){
			$(".page_2_tip_1").stop();
			$(".page_2_tip_2").stop();
			$(".page_2_tip_3").stop();
			$(".page_2_tip_4").stop();
			$(".page_2_tip_1").css({"top":"12.3333333%","opacity":"0"});
			$(".page_2_tip_2").css({"top":"22.222222%","opacity":"0"});
			$(".page_2_tip_3").css({"top":"26.222222%","opacity":"0"});
			$(".page_2_tip_4").css({"top":"30.222222%","opacity":"0"});
			time_2=0;
		}else{
			if(time_2==0){
				$(".page_2_tip_1").stop();
				$(".page_2_tip_2").stop();
				$(".page_2_tip_3").stop();
				$(".page_2_tip_4").stop();
				textMove($(".page_2_tip_1"),"10.3333333%","1",0);
				textMove($(".page_2_tip_2"),"20.222222%","1",200);
				textMove($(".page_2_tip_3"),"24.222222%","1",400);
				textMove($(".page_2_tip_4"),"28.222222%","1",600);
				time_2++;
			}
		}
		


		//第三个界面的动画
		if($(document).scrollTop()<2/5*($(".page_3").offset().top)||$(document).scrollTop()>5/6*($(".page_4").offset().top)){
			$(".page_3_tip_1").stop();
			$(".page_3_tips_1").stop();
			$(".page_3_tip_2").stop();
			$(".page_3_tip_3").stop();
			$(".page_3_tip_4").stop();
			$(".page_3_tip_5").stop();
			$(".page_3_tip_1").css({"top":"10.454545","opacity":"0"});
			$(".page_3_tips_1").css({"top":"16.454545","opacity":"0"});
			$(".page_3_tip_2").css({"top":"25%","opacity":"0"});
			$(".page_3_tip_3").css({"top":"29%","opacity":"0"});
			$(".page_3_tip_4").css({"top":"33%","opacity":"0"});
			$(".page_3_tip_5").css({"top":"37%","opacity":"0"});
			time_3=0;
		}else{
			if(time_3==0){
				$(".page_3_tip_1").stop();
				$(".page_3_tips_1").stop();
				$(".page_3_tip_2").stop();
				$(".page_3_tip_3").stop();
				$(".page_3_tip_4").stop();
				$(".page_3_tip_5").stop();
				textMove($(".page_3_tip_1"),"8.454545%","1",0);
				textMove($(".page_3_tips_1"),"14.454545%","1",0);
				textMove($(".page_3_tip_2"),"23%","1",200);
				textMove($(".page_3_tip_3"),"27%","1",400);
				textMove($(".page_3_tip_4"),"31%","1",600);
				textMove($(".page_3_tip_5"),"35%","1",800);
				time_3++;
			}
		}


		//第四个界面的动画
		if($(document).scrollTop()<2/3*($(".page_4").offset().top)||$(document).scrollTop()>11/12*($(".page_5").offset().top)){
			$(".page_4_tip_1").stop();
			$(".page_4_tips_1").stop();
			$(".page_4_tip_2").stop();
			$(".page_4_photos").stop();
			$(".page_4_tip_1").css({"top":"45.272727%","opacity":"0"});
			$(".page_4_tips_1").css({"top":"51.272727%","opacity":"0"});
			$(".page_4_tip_2").css({"top":"59.818182%","opacity":"0"});
			$(".page_4_photos").css({"width":"0%","height":"0%","left":"63.2%","top":"14.181818%"});
			time_4=0;
		}else{
			if(time_4==0){
				$(".page_4_tip_1").stop();
				$(".page_4_tips_1").stop();
				$(".page_4_tip_2").stop();
				$(".page_4_photos").stop();
				textMove($(".page_4_tip_1"),"43.272727%","1",0);
				textMove($(".page_4_tips_1"),"49.272727%","1",0);
				textMove($(".page_4_tip_2"),"57.818182%","1",200);
				conversation($(".page_4_photos"),"48.266667%","5.909091%","14.933333%","8.272727%",0);
				time_4++;
			}
		}


		//第五个界面的动画
		if($(document).scrollTop()<5/7*($(".page_5").offset().top)||$(document).scrollTop()>13/14*($(".page_6").offset().top)){
			$(".page_5_tip_1").stop();
			$(".page_5_tips_1").stop();
			$(".page_5_tip_2").stop();
			$(".page_5_tip_3").stop();
			$(".page_5_tip_4").stop();
			$(".page_5_photo").stop();
			$(".page_5_photos").stop();
			$(".page_5_tip_1").css({"top":"10.454545%","opacity":"0"});
			$(".page_5_tips_1").css({"top":"17.909091%","opacity":"0"});
			$(".page_5_tip_2").css({"top":"24.909091%","opacity":"0"});
			$(".page_5_tip_3").css({"top":"28.909091%","opacity":"0"});
			$(".page_5_tip_4").css({"top":"32.909091%","opacity":"0"});
			$(".page_5_photo").css({"width":"0%","height":"0%","left":"39.866667%","top":"46.272727%"});
			$(".page_5_photos").css({"width":"0%","height":"0%","left":"91.066667%","top":"69.727273%"});
			time_5=0;
		}else{
			if(time_5==0){
				$(".page_5_tip_1").stop();
				$(".page_5_tips_1").stop();
				$(".page_5_tip_2").stop();
				$(".page_5_tip_3").stop();
				$(".page_5_tip_4").stop();
				$(".page_5_photo").stop();
				$(".page_5_photos").stop();
				textMove($(".page_5_tip_1"),"8.454545%","1",0);
				textMove($(".page_5_tips_1"),"15.454545%","1",0);
				textMove($(".page_5_tip_2"),"22.909091%","1",200);
				textMove($(".page_5_tip_3"),"26.909091%","1",400);
				textMove($(".page_5_tip_4"),"30.909091%","1",600);
				conversation($(".page_5_photo"),"48.266667%","5.909091%","39.866667%","40.363636%",0);
				conversation($(".page_5_photos"),"36.666667%","5.909091%","54.4%","63.818182%",1000);
				time_5++;
			}
		}


		//第六个界面的动画
		if($(document).scrollTop()<4/5*($(".page_6").offset().top)||$(document).scrollTop()>9/10*($(".page_7").offset().top)){
			$(".page_6_tip_1").stop();
			$(".page_6_tip_2").stop();
			$(".page_6_tip_3").stop();
			$(".page_6_tip_4").stop();
			$(".page_6_tip_1").css({"top":"11.3%","opacity":"0"});
			$(".page_6_tip_2").css({"top":"18.3%","opacity":"0"});
			$(".page_6_tip_3").css({"top":"27.2%","opacity":"0"});
			$(".page_6_tip_4").css({"top":"31.2%","opacity":"0"});
			time_6=0;
		}else{
			if(time_6==0){
				$(".page_6_tip_1").stop();
				$(".page_6_tip_2").stop();
				$(".page_6_tip_3").stop();
				$(".page_6_tip_4").stop();
				textMove($(".page_6_tip_1"),"9.3%","1",0);
				textMove($(".page_6_tip_2"),"16.3%","1",200);
				textMove($(".page_6_tip_3"),"25.2%","1",200);
				textMove($(".page_6_tip_4"),"29.2%","1",400);
				time_6++;
			}
		}


		//第七个界面的动画
		if($(document).scrollTop()<9/11*($(".page_7").offset().top)||$(document).scrollTop()>12/14*($(".page_8").offset().top)){
			$(".page_7_tip_1").stop();
			$(".page_7_tip_2").stop();
			$(".page_7_tip_3").stop();
			$(".page_7_tip_4").stop();
			$(".page_7_tip_5").stop();
			$(".page_7_tip_1").css({"top":"7.8125%","opacity":"0"});
			$(".page_7_tip_2").css({"top":"11.8125%","opacity":"0"});
			$(".page_7_tip_3").css({"top":"17.75%","opacity":"0"});
			$(".page_7_tip_4").css({"top":"20.75%","opacity":"0"});
			$(".page_7_tip_5").css({"top":"23.75%","opacity":"0"});
			time_7=0;
		}else{
			if(time_7==0){
				$(".page_7_tip_1").stop();
				$(".page_7_tip_2").stop();
				$(".page_7_tip_3").stop();
				$(".page_7_tip_4").stop();
				$(".page_7_tip_5").stop();
				textMove($(".page_7_tip_1"),"5.8125%","1",0);
				textMove($(".page_7_tip_2"),"9.8125%","1",200);
				textMove($(".page_7_tip_3"),"15.75%","1",400);
				textMove($(".page_7_tip_4"),"18.75%","1",600);
				textMove($(".page_7_tip_5"),"21.75%","1",800);
				time_7++;
			}
		}

		//第八个界面的动画
		if($(document).scrollTop()<10/12*($(".page_8").offset().top)||$(document).scrollTop()>13/14*($(".page_9").offset().top)){
			$(".page_8_tip_1").stop();
			$(".page_8_tip_2").stop();
			$(".page_8_tip_3").stop();
			$(".page_8_tip_4").stop();
			$(".page_8_tip_1").css({"top":"11.489796%","opacity":"0"});
			$(".page_8_tip_2").css({"top":"18.489796%","opacity":"0"});
			$(".page_8_tip_3").css({"top":"27.714286%","opacity":"0"});
			$(".page_8_tip_4").css({"top":"31.714286%","opacity":"0"});
			time_8=0;
		}else{
			if(time_8==0){
				$(".page_8_tip_1").stop();
				$(".page_8_tip_2").stop();
				$(".page_8_tip_3").stop();
				$(".page_8_tip_4").stop();
				textMove($(".page_8_tip_1"),"9.489796%","1",0);
				textMove($(".page_8_tip_2"),"16.489796%","1",200);
				textMove($(".page_8_tip_3"),"25.714286%","1",400);
				textMove($(".page_8_tip_4"),"29.714286%","1",600);
				time_8++;
			}
		}
		//第九个界面的动画
		if($(document).scrollTop()<18/20*($(".page_9").offset().top)){
			$(".page_9_photos_1").stop();
			$(".page_9_photos_2").stop();
			$(".page_9_photos_3").stop();
			$(".page_9_photos_4").stop();
			$(".page_9_photos_5").stop();
			$(".page_9_photos_6").stop();
			$(".page_9_photos_1").css({"left":"-25%","opacity":"0"});
			$(".page_9_photos_2").css({"left":"75%","opacity":"0"});
			$(".page_9_photos_3").css({"left":"-25%","opacity":"0"});
			$(".page_9_photos_4").css({"left":"75%","opacity":"0"});
			$(".page_9_photos_5").css({"left":"-25%","opacity":"0"});
			$(".page_9_photos_6").css({"left":"75%","opacity":"0"});
			time_9=0;
		}else{
			if(time_9==0){
				$(".page_9_photos_1").stop();
				$(".page_9_photos_2").stop();
				$(".page_9_photos_3").stop();
				$(".page_9_photos_4").stop();
				$(".page_9_photos_5").stop();
				$(".page_9_photos_6").stop();
				move($(".page_9_photos_1"),0,1,0,0);
				move($(".page_9_photos_2"),50,1,1,0);
				move($(".page_9_photos_3"),0,1,0,800);
				move($(".page_9_photos_4"),50,1,1,800);
				move($(".page_9_photos_5"),0,1,0,1600);
				move($(".page_9_photos_6"),50,1,1,1600);
				time_9++;
			}
		}


		//判断条件,条件成立才阻止背景页面滚动,其他情况不会再影响到页面滚动  
	    // if ($("#popup").css('display')=="block") {  
	    //     $('body').css('overflow','hidden'); 
	    // }else{
	    // 	$('body').css('overflow','initial');
	    // }



	});
	//文字移动的动画函数
	function textMove(target,margin,opacity,delay){
		target.delay(delay).animate({"top":margin,"opacity":opacity},1000);
	}
	//机器人移动的动画函数
	function robortMove(target,left){
		target.animate({"left":left},1500);
	}
	//对话框移动的动画函数
	function conversation(target,width,height,left,top,delay){
		target.delay(delay).animate({
			"width":width,
			"height":height,
			"left":left,
			"top":top
		},1000);
	}
	//最后六个图形的动画
	function move(target,left,opacity,diraction,delay){
		if(diraction==0){
			var l=left+2;
			target.delay(delay).animate({
				"opacity":opacity,
				"left":l+"%"
			},400,function(){
				target.animate({
					"left":left+"%"
				},100,function(){
				target.stop();
				})
			})
		}else{
			var l=left-2;
			target.delay(delay).animate({
				"opacity":opacity,
				"left":l+"%"
			},400,function(){
				target.animate({
					"left":left+"%"
				},100,function(){
					target.stop();
				})
			})
		}
	}



	//旋转屏幕刷新
    window.onorientationchange=function(){
    	location.reload();
    }


    $("#indexbtn").on('touchstart',function(){
    	$(".indexmobile").fadeIn();
    	$("#indexbtn").find('span').addClass('on');
    	$(".parametermobile").fadeOut();
    	$("#parameterbtn").find('span').removeClass('on');
    	$(".index-footer").css({"padding-top":"25px"});
    })

    $("#parameterbtn").on('touchstart',function(){
    	$(".parametermobile").fadeIn();
    	$("#parameterbtn").find('span').addClass('on');
    	$(".indexmobile").fadeOut();
    	$("#indexbtn").find('span').removeClass('on');
    	$(".index-footer").css({"padding-top":"0px"});
    })







    $(".logo").on("click",function(){
        if($(this).hasClass('up')){
            $(".products-menu").css({'height':'0','transform':'translateY(-300px)', 'opacity':0});
            $(this).removeClass('up');
        }else{
            $(".products-menu").css({'height':'151px','transform':'translateY(0)', 'opacity':1});
            $(this).addClass('up');
        }
    });
    $(".page_1,.page_10").on('touchstart',function(){
    	$(".products-menu").css({'height':'0','transform':'translateY(-300px)', 'opacity':0});
        $(".logo").removeClass('up');
    });

	$(".mod-list li").on('touchstart',function(){
        $(".mod-list li").css("background","rgba(255,255,255,.95)");
		$(this).css("background","#ebebeb");
	});
    $(".mod-list li").on('touchend',function(){
        $(this).css("background","rgba(255,255,255,.95)");
    });

    //滚动，产品导航在顶部
    $(window).scroll(function(){

        //判断产品界面产品二级导航是否展开，若展开则隐藏二级产品菜单。
        if($(".dropdown-list").hasClass('up')){
             $(".products-menu").css({'height':'0','transform':'translateY(-300px)','opacity':0.7});
             $(".dropdown-list").removeClass('up');
        }

        if($(this).scrollTop() > 60){
            $(".nav-header").css("position","fixed");
            $("#mobiletop").css("display","none");
        }else{
            $(".nav-header").css("position","relative");
            $("#mobiletop").css("display","block");
        }
    });  
})