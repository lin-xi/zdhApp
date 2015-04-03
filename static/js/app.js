(function(window){

	var app = window.app = koala.module('zdh');
	var HOST = '/lbc';
	
	var ROUTER = {
		'/index': {
			controller: 'IndexController',
			template: '/static/js/views/index.html'
		},
		'/catalog': {
			controller: 'CatalogController',
			template: '/static/js/views/catalog.html'
		},
		'/nearby': {
			controller: 'NearbyController',
			template: '/static/js/views/nearby.html'
		},
		'/iwant': {
			controller: 'IwantController',
			template: '/static/js/views/iwant.html'
		},
		'/mine': {
			controller: 'MineController',
			template: '/static/js/views/mine.html'
		}
	};

	app.on('pathChange', function(path){
		
	});

	app.config({
		router: ROUTER,
		view: 'view'
	});

})(window);
