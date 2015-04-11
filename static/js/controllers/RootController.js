app.controller('RootController', function(){

	var wh = $(window).height();
	$('#view').height(wh);

	app.redirect('/index');
	
});