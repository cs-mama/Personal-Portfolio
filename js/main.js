   
/*
[Start Activation Code]
	* One Page Nav
	* Sticky JS
	* Mobile Menu
	* Social JS
	* achievement hover
	* Isotop Active
	* Counter JS
	* Wow JS
	* Parallax JS
	* Video Background
	* Side Navigation
	* Personal slider
	* Extra JS
	* Preloader JS

[End Activation Code]
*/ 
(function ($) {
	"use strict";
    $(document).ready(function(){
		
		function Maheraz_Custom_JS() {
			var windowS = $(window),
				windowH = windowS.height(),
				projecthoverS = $('.project-hover'),
				projecthoverH = projecthoverS.height(),
				proejectdevide = (projecthoverH / 2);
				projecthoverS.css({
				marginTop: -proejectdevide,
			});
		}; 
		
		/*
		//  Onepage Nav
		*/ 
		if ($.fn.onePageNav) {
			$('.mainmenu .nav').onePageNav({
				currentClass: 'active',
				scrollSpeed: 1000,
				easing: 'easeInOutQuart'
			});
		}
		
		/*
		// Sticky JS
		*/ 
		jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 1) {
				$('#header').addClass("sticky");
			} else {
				$('#header').removeClass("sticky");
			}
		});
			
		/*
		// 	Mobile Menu
		*/ 	
		$('.menu').slicknav({
			prependTo:".mobile-nav",
			closeOnClick:true,
		});
		
		/*
		// 	Social JS
		*/ 	
		$('.social-icon li a').on( "click", function(){
			$('.social').toggleClass('active');
		});
		
		
		/*
		// achievement Hover
		*/ 
		$('.single-achievement').on('mouseenter', function(){
			$(' .single-achievement').removeClass('active');
			$(this).addClass('active');
		});
		
		/*
		// Isotop Active
		*/
		$(window).on('load', function() {
			Maheraz_Custom_JS();		
			
			if ($.fn.isotope) {
                $(".isotop-active").isotope({
                    filter: '*',
                });

					$('.project-nav ul li').on('click', function() {
                    $(".project-nav ul li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr('data-filter');
                    $(".isotop-active").isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'easeInOutQuart',
                            queue: false,
                        }
                    });
                    return false;
                });
            }
		});
		
		/*
			Counter JS
		*/ 
		$('.count').counterUp({
			time: 1000
		});
		
		/*
		// Testimonial Carousel
		*/ 	
		$(".testimonial-carousel").owlCarousel({
			loop:true,
			autoplay:false,
			smartSpeed: 600,
			animateOut: 'flipOutX',
			animateIn: 'flipInX',
			margin:30,
			nav:true,
			dots:false,
			items: 1,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		});	
		
		
		
		
		/*
			Wow JS
		*/		
		var window_width = $(window).width();   
			if(window_width > 767){
            new WOW().init();
		}
		
		/*
		// Parallax JS
		*/ 
		 $(window).stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });
		
		
		/*
		// 	Side Navigation
		*/ 	
		$('.side-icon a').on( "click", function(){
			$('#header').toggleClass('active');
		});
		
		/*
		// Personal Slider
		*/ 	
		$(".personal-main.slide").owlCarousel({
			loop:true,
			autoplay:true,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			smartSpeed: 600,
			autoplayTimeout:4000,
			mouseDrag: false,
			margin:30,
			nav:false,
			dots:true,
			items: 1,
		});	
		
		/*
		// project
		*/ 	
		$(".project-single.slider").owlCarousel({
			loop:true,
			autoplay:true,
			smartSpeed: 600,
			autoplayTimeout:3500,
			mouseDrag: true,
			margin:30,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:false,
			items: 1,
		});	
		 
		$(".project-related").owlCarousel({
			loop:true,
			autoplay:true,
			smartSpeed: 600,
			autoplayTimeout:3500,
			mouseDrag: true,
			nav:false,
			dots:false,
			items: 1,
			responsive:{
				300: {
					items: 1,
				},
				480: {
					items: 1,
				},
				768: {
					items: 2,
				},
				1170: {
					items: 3,
				},
			}
		});	

		
		/*====================================
		Extra JS
		======================================*/
		$('.btn, .arrow a, .slicknav_menu li a').on('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 20 
			}, 1000, 'easeInOutQuart');
			event.preventDefault();
		});
		
		$('.player').mb_YTPlayer();		
		
    });
	
	/*======================================
	// Preloader
	======================================*/ 	
		$(window).load(function(){
				$('.loader').fadeOut('slow', function(){
				$(this).remove();
			});
		});
})(jQuery);	