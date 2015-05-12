app.controller('IndexController', function(){
	var scope = this;

	
	new Swiper('.banner-slide', {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });

    new Swiper('.nearby-slide', {
    	pagination: '.swiper-pagination'
    });


});