$(document).ready(function() {
	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false,
	});

	var typed = new Typed(".typed", {
		strings: ["Student", "Software Engineer", "Catan Tryhard", "Killer Whale Enthusiast"],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false,
	});

	var owl = $('.owl-carousel');
	owl.owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	});
	owl.on('mousewheel', '.owl-stage', function (e) {
	    if (e.deltaX>0) {
	        owl.trigger('next.owl');
	    } else {
	        owl.trigger('prev.owl');
	    }
	    e.preventDefault();
	});
})