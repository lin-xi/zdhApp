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
		'/send-order': {
			controller: 'SendOrderController',
			template: '/static/js/views/send-order.html'
		},
		'/order-choose': {
			controller: 'OrderChooseController',
			template: '/static/js/views/order-choose.html'
		},
		'/shop-detail': {
			controller: 'ShopDetailController',
			template: '/static/js/views/shop-detail.html'
		},
		'/mine': {
			controller: 'MineController',
			template: '/static/js/views/mine.html'
		},
		'/wait-order': {
			controller: 'WaitOrderController',
			template: '/static/js/views/wait-order.html'
		},
		'/unpay-order': {
			controller: 'UnpayOrderController',
			template: '/static/js/views/unpay-order.html'
		},
		'/running-order': {
			controller: 'RunningOrderController',
			template: '/static/js/views/running-order.html'
		},
		'/remark-order': {
			controller: 'RemarkOrderController',
			template: '/static/js/views/remark-order.html'
		},
		'/all-order': {
			controller: 'AllOrderController',
			template: '/static/js/views/all-order.html'
		},
		'/chat': {
			controller: 'ChatController',
			template: '/static/js/views/chat.html'
		}
	};

	app.on('pathChange', function(path){
		
	});

	app.config({
		router: ROUTER,
		view: 'view'
	});

})(window);
