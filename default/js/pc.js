$(function(){
	//判断浏览器版本，因为在IE浏览器下面，对话框的弹出动画出现了问题
	function getBroswer(){
	    var Sys = {};
	    var ua = navigator.userAgent.toLowerCase();
	    var s;
	    (s = ua.match(/edge\/([\d.]+)/)) ? Sys.edge = s[1] :
	    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] :
	    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
	    (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
	    (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
	    (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
	    (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

	    if (Sys.edge) return { broswer : "Edge", version : Sys.edge };
	    if (Sys.ie) return { broswer : "IE", version : Sys.ie };
	    if (Sys.firefox) return { broswer : "Firefox", version : Sys.firefox };
	    if (Sys.chrome) return { broswer : "Chrome", version : Sys.chrome };
	    if (Sys.opera) return { broswer : "Opera", version : Sys.opera };
	    if (Sys.safari) return { broswer : "Safari", version : Sys.safari };
	    
	    return { broswer : "", version : "0" };
	}
	var abc = getBroswer();
	if(abc.broswer=="IE"&&Number(abc.version)==9){
		$(".pic_4_photos").addClass('pic_4_position');
		$(".pic_5_photo").addClass('pic_5_position');
		$(".pic_5_photos").addClass('pic_5_positions');
	}
	textMove($(".pic_1_tip_1"),"0%","1",0);
	textMove($(".pic_1_tip_2"),"0%","1",200);
	robortMove($(".blue"),"68.25%");
	robortMove($(".pink"),"77.25%");
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
		if($(document).scrollTop()>4/5*($(".pic_2").offset().top)){
			$(".pic_1_tip_1").stop();
			$(".pic_1_tip_2").stop();
			$(".blue").stop();
			$(".pink").stop();
			$(".pic_1_tip_1").css({"margin-top":"5%","opacity":"0"});
			$(".pic_1_tip_2").css({"margin-top":"5%","opacity":"0"});
			$(".blue").css({"left":"66.25%"});
			$(".pink").css({"left":"79.25%"});
			time_1=0;
		}else{
			if(time_1==0){
				$(".pic_1_tip_1").stop();
				$(".pic_1_tip_2").stop();
				$(".blue").stop();
				$(".pink").stop();
				textMove($(".pic_1_tip_1"),"0%","1",0);
				textMove($(".pic_1_tip_2"),"0%","1",200);
				robortMove($(".blue"),"68.25%");
				robortMove($(".pink"),"77.25%");
				time_1++;
			}
			
		}
		//第二个界面的动画
		if($(document).scrollTop()<1/6*($(".pic_2").offset().top)||$(document).scrollTop()>4/5*($(".pic_3").offset().top)){
			$(".pic_2_tip_1").stop();
			$(".pic_2_tip_2").stop();
			$(".pic_2_tip_3").stop();
			$(".pic_2_tip_4").stop();
			$(".pic_2_tip_1").css({"margin-top":"1%","opacity":"0"});
			$(".pic_2_tip_2").css({"margin-top":"1%","opacity":"0"});
			$(".pic_2_tip_3").css({"margin-top":"0%","opacity":"0"});
			$(".pic_2_tip_4").css({"margin-top":"0%","opacity":"0"});
			time_2=0;
		}else{
			if(time_2==0){
				$(".pic_2_tip_1").stop();
				$(".pic_2_tip_2").stop();
				$(".pic_2_tip_3").stop();
				$(".pic_2_tip_4").stop();
				textMove($(".pic_2_tip_1"),"0%","1",0);
				textMove($(".pic_2_tip_2"),"0%","1",200);
				textMove($(".pic_2_tip_3"),"0%","1",400);
				textMove($(".pic_2_tip_4"),"0%","1",600);
				time_2++;
			}
		}
		


		//第三个界面的动画
		if($(document).scrollTop()<2/5*($(".pic_3").offset().top)||$(document).scrollTop()>($(".pic_4").offset().top)){
			$(".pic_3_tip_1").stop();
			$(".pic_3_tip_2").stop();
			$(".pic_3_tip_3").stop();
			$(".pic_3_tip_4").stop();
			$(".pic_3_tip_1").css({"margin-top":"1%","opacity":"0"});
			$(".pic_3_tip_2").css({"margin-top":"1%","opacity":"0"});
			$(".pic_3_tip_3").css({"margin-top":"1%","opacity":"0"});
			$(".pic_3_tip_4").css({"margin-top":"1%","opacity":"0"});
			time_3=0;
		}else{
			if(time_3==0){
				$(".pic_3_tip_1").stop();
				$(".pic_3_tip_2").stop();
				$(".pic_3_tip_3").stop();
				$(".pic_3_tip_4").stop();
				textMove($(".pic_3_tip_1"),"0%","1",0);
				textMove($(".pic_3_tip_2"),"0%","1",200);
				textMove($(".pic_3_tip_3"),"0%","1",400);
				textMove($(".pic_3_tip_4"),"0%","1",600);
				time_3++;
			}
		}


		//第四个界面的动画
		if($(document).scrollTop()<2/3*($(".pic_4").offset().top)||$(document).scrollTop()>9/10*($(".pic_5").offset().top)){
			$(".pic_4_tip_1").stop();
			$(".pic_4_tip_2").stop();
			$(".pic_4_photos").stop();
			$(".pic_4_tip_1").css({"margin-top":"4%","opacity":"0"});
			$(".pic_4_tip_2").css({"margin-top":"4%","opacity":"0"});
			$(".pic_4_photos").css({"width":"0%","height":"0%","top":"24.875%","left":"75.765%"});
			$(".pic_4_photos").removeClass('move_1');
			time_4=0;
		}else{
			if(time_4==0){
				$(".pic_4_tip_1").stop();
				$(".pic_4_tip_2").stop();
				$(".pic_4_photos").stop();
				textMove($(".pic_4_tip_1"),"0%","1",0);
				textMove($(".pic_4_tip_2"),"0%","1",200);
				if((abc.broswer=="IE"&&Number(abc.version)!=9)||abc.broswer=="Edge"){
					$(".pic_4_photos").addClass('move_1');
				}else{
					conversation($(".pic_4_photos"),"18.85%","8.125%","56.875%","16.75%",0);
				}
				time_4++;
			}
		}


		//第五个界面的动画
		if($(document).scrollTop()<5/7*($(".pic_5").offset().top)||$(document).scrollTop()>11/12*($(".pic_6").offset().top)){
			$(".pic_5_tip_1").stop();
			$(".pic_5_tip_2").stop();
			$(".pic_5_photo").stop();
			$(".pic_5_photos").stop();
			$(".pic_5_tip_1").css({"margin-top":"4%","opacity":"0"});
			$(".pic_5_tip_2").css({"margin-top":"4%","opacity":"0"});
			$(".pic_5_photo").css({"width":"0%","height":"0%","left":"23.07%","top":"29.625%"});
			$(".pic_5_photos").css({"width":"0%","height":"0%","left":"40.36%","top":"57.875%"});
			$(".pic_5_photo").removeClass('move_2');
			$(".pic_5_photos").removeClass('move_3');
			time_5=0;
		}else{
			if(time_5==0){
				$(".pic_5_tip_1").stop();
				$(".pic_5_tip_2").stop();
				$(".pic_5_photo").stop();
				$(".pic_5_photos").stop();
				textMove($(".pic_5_tip_1"),"0%","1",0);
				textMove($(".pic_5_tip_2"),"0%","1",200);
				if((abc.broswer=="IE"&&Number(abc.version)!=9)||abc.broswer=="Edge"){
					$(".pic_5_photo").addClass('move_2');
					$(".pic_5_photos").addClass('move_3');
				}else{
					conversation($(".pic_5_photo"),"18.85%","8.125%","23.07%","21.5%",0);
					conversation($(".pic_5_photos"),"14.32%","8.125%","26.04%","49.75%",1000);
				}
				time_5++;
			}
		}


		//第六个界面的动画
		if($(document).scrollTop()<4/5*($(".pic_6").offset().top)||$(document).scrollTop()>9/10*($(".pic_7").offset().top)){
			$(".pic_6_tip_1").stop();
			$(".pic_6_tip_2").stop();
			$(".pic_6_tip_1").css({"margin-top":"1%","opacity":"0"});
			$(".pic_6_tip_2").css({"margin-top":"1%","opacity":"0"});
			time_6=0;
		}else{
			if(time_6==0){
				$(".pic_6_tip_1").stop();
				$(".pic_6_tip_2").stop();
				textMove($(".pic_6_tip_1"),"0%","1",0);
				textMove($(".pic_6_tip_2"),"0%","1",200);
				time_6++;
			}
		}


		//第七个界面的动画
		if($(document).scrollTop()<9/11*($(".pic_7").offset().top)||$(document).scrollTop()>9/10*($(".pic_8").offset().top)){
			$(".pic_7_tip_1").stop();
			$(".pic_7_tip_2").stop();
			$(".pic_7_tip_3").stop();
			$(".pic_7_tip_1").css({"margin-top":"1%","opacity":"0"});
			$(".pic_7_tip_2").css({"margin-top":"1%","opacity":"0"});
			$(".pic_7_tip_3").css({"margin-top":"1%","opacity":"0"});
			time_7=0;
		}else{
			if(time_7==0){
				$(".pic_7_tip_1").stop();
				$(".pic_7_tip_2").stop();
				$(".pic_7_tip_3").stop();
				textMove($(".pic_7_tip_1"),"0%","1",0);
				textMove($(".pic_7_tip_2"),"0%","1",200);
				textMove($(".pic_7_tip_3"),"0%","1",400);
				time_7++;
			}
		}

		//第八个界面的动画
		if($(document).scrollTop()<9/11*($(".pic_8").offset().top)||$(document).scrollTop()>9/10*($(".pic_9").offset().top)){
			$(".pic_8_tip_1").stop();
			$(".pic_8_tip_2").stop();
			$(".pic_8_tip_1").css({"margin-top":"1%","opacity":"0"});
			$(".pic_8_tip_2").css({"margin-top":"1%","opacity":"0"});
			time_8=0;
		}else{
			if(time_8==0){
				$(".pic_8_tip_1").stop();
				$(".pic_8_tip_2").stop();
				textMove($(".pic_8_tip_1"),"0%","1",0);
				textMove($(".pic_8_tip_2"),"0%","1",200);
				time_8++;
			}
		}
		//第九个界面的动画
		if($(document).scrollTop()<11/13*($(".pic_9").offset().top)){
			$(".pic_9_photos_1").stop();
			$(".pic_9_photos_2").stop();
			$(".pic_9_photos_3").stop();
			$(".pic_9_photos_4").stop();
			$(".pic_9_photos_5").stop();
			$(".pic_9_photos_6").stop();
			$(".pic_9_photos_1").css({"left":"-25%","opacity":"0"});
			$(".pic_9_photos_2").css({"left":"75%","opacity":"0"});
			$(".pic_9_photos_3").css({"left":"-25%","opacity":"0"});
			$(".pic_9_photos_4").css({"left":"75%","opacity":"0"});
			$(".pic_9_photos_5").css({"left":"-25%","opacity":"0"});
			$(".pic_9_photos_6").css({"left":"75%","opacity":"0"});
			time_9=0;
		}else{
			if(time_9==0){
				$(".pic_9_photos_1").stop();
				$(".pic_9_photos_2").stop();
				$(".pic_9_photos_3").stop();
				$(".pic_9_photos_4").stop();
				$(".pic_9_photos_5").stop();
				$(".pic_9_photos_6").stop();
				move($(".pic_9_photos_1"),0,1,0,0);
				move($(".pic_9_photos_2"),50,1,1,0);
				move($(".pic_9_photos_3"),0,1,0,800);
				move($(".pic_9_photos_4"),50,1,1,800);
				move($(".pic_9_photos_5"),0,1,0,1600);
				move($(".pic_9_photos_6"),50,1,1,1600);
				time_9++;
			}
		}






	});
	//文字移动的动画函数
	function textMove(target,margin,opacity,delay){
		target.delay(delay).animate({"margin-top":margin,"opacity":opacity},1000);
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



	$("#showindex").on('click',function(){
		$("#indexpc").fadeIn();
		$("#parameterpc").fadeOut();
    	$("#showindex").find("a").addClass("bottom_line");
    	$("#showparameter").find("a").removeClass("bottom_line");
	})
	$("#showparameter").on('click',function(){
		$("#indexpc").fadeOut();
		$("#parameterpc").fadeIn();
    	$("#showindex").find("a").removeClass("bottom_line");
    	$("#showparameter").find("a").addClass("bottom_line");
	})
})