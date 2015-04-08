app.controller('SendOrderController', function(){
	var wh = $(window).height()-40;
	if(wh > $('body').height()){
		$('body').height(wh);
	}
	$('.app-body').height(wh);

	var percent = 0;

	function increase(){
		percent += 16;

		if(percent < 348){
			var per = Math.floor(percent*100/348);
			$('.price').val(per);
			$('#posted').text(percent+1);
			$('.rule').width($('.price').width() * per/100);

			setTimeout(function(){
				increase();
			}, 100)

		} else {
			$('.price').val(100);
			$('#posted').text(348);
			$('.rule').width($('.price').width()-4);

			setTimeout(function(){
				app.redirect('/order-choose')
			}, 1000);
		}
	}

	increase();
		
});