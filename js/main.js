$(document).ready(function() {
	var h=0
	$('.iconsol').css('height',$('.slayd').css('height'))
	$('.iconsag').css('height',$('.slayd').css('height'))
	$('.op').css('width',$('.yuxari').css('width').slice(0,-2)-10+'px')
	$('.op').css('margin-left','5px')
	$('.op1').css('margin-top','10px')
	h=$('.op1').css('height').slice(0,-2)
	$('.op2').css('margin-top',h-(-20)+'px')
	$('.op3').css('margin-top',$('.yuxari').css('height').slice(0,-2)-$('.op3').css('height').slice(0,-2)-10+'px')
	$(window).resize(function () {
		$('.op').css('width',$('.yuxari').css('width').slice(0,-2)-10+'px')
		$('.op').css('margin-left','5px')
		$('.op1').css('margin-top','10px')
		h=$('.op1').css('height').slice(0,-2)
		$('.op2').css('margin-top',h-(-20)+'px')
		$('.op3').css('margin-top',$('.yuxari').css('height').slice(0,-2)-$('.op3').css('height').slice(0,-2)-10+'px')
		$('.iconsol').css('height',$('.slayd').css('height'))
		$('.iconsag').css('height',$('.slayd').css('height'))
	})
	// $('.asagi').hover()s


	// $('.iconsol').click(function () {
	// 	$('.slayd').fadeTo(1000,0)

	// })
	var slideIndex = 0;
	var icaze = 1;
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
		$('.slaydlar .slayd').eq(slideIndex).fadeTo(400,1,function(){
			icaze=1;
		});
		timeout = setTimeout(name1,7000);
	}
	$('.iconsol i').click(function(x) {
		if (icaze==1) {
			clearTimeout(timeout);
			if (slideIndex==0) {
				slideIndex = $('.slaydlar .slayd').length-1;
			}
			else{
				slideIndex--;
			}
			icaze=0;
			name2();
		}
	})
	$('.iconsag i').click(function(x) {
		if (icaze==1) {
			clearTimeout(timeout);
			if (slideIndex==$('.slaydlar .slayd').length-1) {
				slideIndex = 0;
			}
			else{
				slideIndex++;
			}
			icaze=0;
			name2();	
		}
	})
})