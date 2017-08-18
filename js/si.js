$(".smalldiv").click(function(){
	    $(".bigdiv").eq($(this).index()).show().siblings(".bigdiv").hide();
	    $(".big1div").eq($(this).index()).show().siblings(".big1div").hide();
})

$(function() {
				$(".big").mouseover(function() {
					$(".big1").show();
					$(".floatdiv").show();
				})
				$(".big").mouseout(function() {
					$(".big1").hide();
					$(".floatdiv").hide();
				})
				$(".big").mousemove(function() {
					$left = event.pageX - $(this).offset().left - $(".floatdiv").outerWidth() / 2;
					$top = event.pageY - $(this).offset().top - $(".floatdiv").outerWidth() / 2;
					if($left < 0) {
						$left = 0;
					} else if($left > $(this).outerWidth() - $(".floatdiv").outerWidth()) {
						$left = $(this).outerWidth() - $(".floatdiv").outerWidth();
					}

					if($top < 0) {
						$top = 0;
					} else if($top > $(this).outerHeight() - $(".floatdiv").outerHeight()) {
						$top = $(this).outerHeight() - $(".floatdiv").outerHeight();
					}

					$(".floatdiv").css({ //于是放大镜就跟随鼠标了  
						left: $left + "px",
						top: $top + "px"
					});
					var rate = $(".big1div img").outerWidth() / $(".bigdiv img").outerWidth();
					$(".big1div img").css({
						left: -rate * ($left / 1) + "px",
						top: -rate * ($top / 1) + "px"
					});
				})
			})