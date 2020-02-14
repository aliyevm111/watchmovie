$(document).ready(function() {
	$('.iconsol').css('height',$('.slayd').css('height'))
	$('.iconsag').css('height',$('.slayd').css('height'))
	$('.slaydlar').hover(function () {
		$('.iconsol').css('height',$('.slayd').css('height'))
		$('.iconsag').css('height',$('.slayd').css('height'))

	})
	// $('.iconsol').click(function () {
	// 	$('.slayd').fadeTo(1000,0)

	// })
	var slideIndex = 0;
	// $('.slaydlar .slayd').eq(0).fadeTo(1000,1)
	// $('.slaydlar .slayd').eq(0).css('display','none')
	var timeout = setTimeout(name1,7000)
	function name1() {
		if (slideIndex>=$('.slaydlar .slayd').length-1) {
			slideIndex = 0;
		}else{
			slideIndex++;
		}
		name2();
	}
	function name2(){
		$('.slaydlar .slayd').fadeTo(400,0)
		$('.slaydlar .slayd').css('display','none')
		$('.slaydlar .slayd').eq(slideIndex).fadeTo(400,1);
		timeout = setTimeout(name1,7000);
	}
	$('.iconsol i').click(function(x) {
		clearTimeout(timeout);
		if (slideIndex==0) {
			slideIndex = $('.slaydlar .slayd').length-1;
		}
		else{
			slideIndex--;
		}
		name2();
	})
	$('.iconsag i').click(function(x) {
		clearTimeout(timeout);
		if (slideIndex==$('.slaydlar .slayd').length-1) {
			slideIndex = 0;
		}
		else{
			slideIndex++;
		}
		name2();	
	})
})