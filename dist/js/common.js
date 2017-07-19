$(document).ready(function() {
		
	// запуск header каруселі
	$('.header-carousel').owlCarousel({
		loop: true,
		smartSpeed: 700,
		nav: false,
		dots: true,
		items: 1,
		autoplay: false,
		autoplaySpeed: 3000,
		autoplayTimeout: 7000
	});

	// анімація плавної появи заголовків
		$(".s-features-h-wrapper, .footer-h-wrapper").addClass('hidden_my').viewportChecker({
		classToAdd: 'visible_my animated fadeInUp',
		offset: '3%',
		repeat: false
	}); 

	// опрацьовуємо клік на fa-bars
	$('.header .header-top-line .header-hamburger i').click(function() {
		$('.navbars').slideToggle(500);
	});
	$('.navbars ul li a').click(function() {
		$('.navbars').slideToggle(500);
	});

	// resize вікна, адаптивність гамбургера, при width > 767 - завжди none
	$(window).resize(function() {
		if ( $(window).width() > 767) {
			$('.navbars').slideUp();
		}
	});	

});