$(document).ready(function () {
    $('#slides').superslides({
        play: 5000,
        animation: "fade",
        pagination: false,
    });

    var typed = new Typed(".typed", {
        strings: ["Web Developer", "Webpage Designer", "Electrical Engineer", "Author", "Lifetime Learner", "Continuous Improvement Leader"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

	$('.owl-carousel').owlCarousel({
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

});
