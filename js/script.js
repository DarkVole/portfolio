$(document).ready(function () {
    $('#slides').superslides({
        play: 5000,
        animation: "fade",
        pagination: false,
    });

    var typed = new Typed(".typed", {
        strings: ["FullStack Developer", "Experienced Programmer", "Webpage Designer", "Out of the Box Thinker", "Lifetime Scholar","Electrical Engineer", "Business Novel Author",  "Continuous Improvement Guru"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    });



	var skillsTopOffset = $(".skillsSection").offset().top;

	$(window).scroll(function() {

		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

			$('.chart').easyPieChart({
		        easing: 'easeInOut',
		        barColor: 'lightgreen',
		        trackColor: false,
		        scaleColor: false,
		        lineWidth: 10,
		        size: 152,
		        onStep: function(from, to, percent) {
		        	$(this.el).find('.percent').text(Math.round(percent));
		        }
		    });
			

		}


	});

});
