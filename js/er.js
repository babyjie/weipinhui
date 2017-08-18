$(function() {
	timer = setInterval(move, 3000);
	function move() {
		$(".gul").animate({"left": "-1000px"},function() {
			$(".gul").css("left", "0");
			$(".gul li:first").remove().clone(true).appendTo(".gul");
		})
	}
	$(".right").click(function() {
		$(".gul li:first").remove().clone().appendTo(".gul");
	})
	$(".left").click(function() {
		$(".gul li:last").remove().clone().prependTo(".gul");
	})
	$(".boo").mouseenter(function() {	
//		$(".box ul").stop(true);
		clearInterval(timer);
	})
	$(".boo").mouseleave(function() {
		timer = setInterval(move, 3000);
	})
	
	$(window).scroll(function(){					
					var h=$(window).height();
					var w=$(window).scrollTop();
					var shang=$(".pinpai").eq(0).offset().top;
					if(w>=shang)
					{
						$(".lou").fadeIn();
						$(".pinpai").each(function(i){
							
							if(h+w-$(".pinpai").eq(i).offset().top>h/2)
							{ 
//								alert($(".pinpai").eq(i).offset().top);
								$(".lou li").eq(i).addClass("active2").siblings().removeClass("active2");
                                						
								$(".lou li").eq(i).children("a").css("display","none").parent().siblings().children("a").css("display","block");
								$(".lou li").eq(i).children("span").css("display","block").parent().siblings().children("span").css("display","none");
							}
						})
					}
					else
					{
						$(".lou").fadeOut();
					}
					
				})
				
				$(".lou .last2").click(function(){
					
					$("body,html").animate({"scrollTop": 0},0)
						
				})
				$(".lou li").click(function(){
					
					var heigh=$(".pinpai").eq($(this).index()).offset().top;
					$("body,html").animate({"scrollTop":heigh},0)
					$(".lou li").eq($(this).index()).addClass("active2").siblings().removeClass("active2");
					$(this).children("a").css("display","none").parent().siblings().children("a").css("display","block");
					$(this).children("span").css("display","block").parent().siblings().children("span").css("display","none");
					return false;
				})
	})
	
	
