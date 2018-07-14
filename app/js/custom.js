;(function($) {


//Mobile-menu
	$('#mobile-menu_btn').on ('click', function(){
		$("body").addClass("menu_active");
		$(".menu_mask").css ({'display':'block'});
		$(".menu_mask").animate ({opacity:0.3}, 400);
	});

	$('#menu_close, .menu_mask').on ('click', function(){
		$("body").removeClass("menu_active");
		$(".menu_mask").animate ({opacity:0}, 400, function(){
			$(".menu_mask").css ({'display':'none'});
		});
	});

//Top-line
	$(window).on('scroll', function() {
	    var scrolled = $(window).scrollTop();
	    if (scrolled > 0) {
	    	$('.top-line').addClass('top-line__fixed');
	    }else  {
	    	$('.top-line').removeClass('top-line__fixed');
	    };
	 });

//Slider
	$('#partners__slider').slick({
		prevArrow: '<div class="slick-prev"></div>',
		nextArrow: '<div class="slick-next"></div>',
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 4
		      }
		    },
		    {
		      breakpoint: 920,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 468,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		]
	});

//Animation
	var shows = $('.show_on_scroll');
	var showsAnimation = $('.animation');
	if (window.screen.width <= '1024') {	
		for (var i = shows.length - 1; i >= 0; i--) {
			shows.eq(i).addClass('animation-delete');
		}
		for (var i = showsAnimation.length - 1; i >= 0; i--) {
			showsAnimation.eq(i).addClass('animation-delete');
		}
	}
	function show(){
	  if(showEl.length > 0){
	    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	    var scrolled_n = scrolled + window.innerHeight-(window.innerHeight/4);
	    
	    for (var i = 0; i < showEl.length; i++) {
	      if(scrolled_n > showEl[i].getBoundingClientRect().top + scrolled ){
	        showEl[i].classList.add('animation');
	        showEl.splice(i,1);
	      }
	    }
	  }
	}

	var showEl = new Array();
	for (var i = shows.length - 1; i >= 0; i--) {
	   showEl.push(shows[i]);
	}

	window.onscroll = function() {
	 show();
	}

	show();

})(jQuery);

