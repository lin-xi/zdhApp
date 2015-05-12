app.controller('OrderChooseController', function(){

	$('.menu').on('click', function(e){
		$('.top-menu').show();

		e.preventDefault();
		e.stopPropagation();
	});

	$('body').on('click', function(){
		$('.top-menu').hide();
	});
});