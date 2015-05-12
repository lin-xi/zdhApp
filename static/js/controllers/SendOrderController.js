app.controller('SendOrderController', function(){

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
				if(location.hash != '#/send-order'){
					var type = location.hash.split('-');
					app.redirect('/order-choose-'+ type[type.length-1]);
				} else {
					app.redirect('/order-choose');
				}
				
			}, 2000);
		}
	}

	setTimeout(function(){
		increase();
	}, 2000)
		
});