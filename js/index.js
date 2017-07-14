$(function(){
	$('.banner img:nth-child(1)').addClass('duang1');
	$('.banner img:nth-child(2)').addClass('duang2');
	$(window).scroll(function(){
		$youhuiH=$('.youhui').offset().top;
		$main1H=$('.main1').offset().top;
		$main2H=$('.main2').offset().top;
		$main3H=$('.main3').offset().top;
		$main4H=$('.main4').offset().top;
		$main5H=$('.main5').offset().top;
		var $height=$(window).height()+$(document).scrollTop();
		if($height>=$youhuiH){
			$('.youhui .youhui_cc').addClass('duang1');
		}
		if($height>=$main1H){
			$('.main1 .m_cc').addClass('duang3');
		}
		if($height>=$main2H){
			$('.main2 .m_cc').addClass('duang4');
		}
		if($height>=$main3H){
			$('.main3 .m_cc').addClass('duang3');
		}
		if($height>=$main4H){
			$('.main4 .m_cc').addClass('duang4');
		}
		if($height>=$main5H){
			$('.main5 h1').addClass('duang2');
		};
	})
})