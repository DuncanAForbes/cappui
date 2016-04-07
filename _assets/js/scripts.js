

jQuery(document).ready(function($){
	//this is used for the video effect only
	if( $('.cd-bg-video-wrapper-two').length > 0 ) {
		var videoWrapper = $('.cd-bg-video-wrapper-two'),
			mq = window.getComputedStyle(document.querySelector('.cd-bg-video-wrapper-two'), '::after').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
		if( mq == 'desktop' ) {
			// we are not on a mobile device 
				video = $('<video loop><source src="//s3-eu-west-1.amazonaws.com/cappui-labs/videos/012081621-big-cargo-ships-containers-tim_H264_420.mp4.mp4" type="video/mp4" /></video>');
			video.appendTo(videoWrapper);
			video.get(0).play();
		}
	}
});


$(document).ready(function() {

	/***************** Waypoints ******************/

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInRight');
	}, {
		offset: '75%'
	});



	/***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

	/***************** Nav Transformicon ******************/

	/* When user clicks the Icon */
	$('.nav-toggle').click(function() {
		$(this).toggleClass('active');
		$('.header-nav').toggleClass('open');
		event.preventDefault();
	});
	/* When user clicks a link */
	$('.header-nav li a').click(function() {
		$('.nav-toggle').toggleClass('active');
		$('.header-nav').toggleClass('open');

	});

	/***************** Header BG Scroll ******************/

	$(function() {
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 20) {
				$('section.navigation').addClass('fixed');
				$('header').css({
					"background-color": "rgba(255, 255, 255, 0.9)",
					"border-bottom": "solid 1px rgb(228, 228, 228)",
					"padding": "10px 20px"
				});
				$('header .member-actions').css({
					"top": "13px",
				});
				$('header .navicon').css({
					"top": "13px",
				});
			} else {
				$('section.navigation').removeClass('fixed');
				$('header').css({
					"background-color": "rgb(255, 255, 255)",
					"border-bottom": "solid 1px rgb(228, 228, 228)",
					"padding": "10px 20px"
				});
				$('header .member-actions').css({
					"top": "13px",
				});
				$('header .navicon').css({
					"top": "13px",
				});
			}
		});
	});

});