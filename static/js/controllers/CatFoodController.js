app.controller('CatFoodController', function(){
	var wh = $(window).height()-40;
	if(wh > $('body').height()){
		$('body').height(wh);
	}
	$('.app-body').height(wh);
	

	new Swiper('.sub-cat', {
        spaceBetween: 10,
        slidesPerView: 'auto'
    });
});