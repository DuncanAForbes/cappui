
$(document).ready(function() {


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
				$('header .navicon a.nav-toggle').css({
					"padding": "15px 35px 16px 0",
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
				$('header .navicon a.nav-toggle').css({
					"padding": "15px 35px 16px 0",
				});
			}
		});
	});

});