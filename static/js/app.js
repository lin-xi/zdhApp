(function(window){

	var app = window.app = koala.module('zdh');
	
	var ROUTER = {
		'/index': {
			controller: 'IndexController',
			template: 'static/js/views/index.html'
		},
		'/catalog': {
			controller: 'CatalogController',
			template: 'static/js/views/catalog.html'
		},
		'/nearby': {
			controller: 'NearbyController',
			template: 'static/js/views/nearby.html'
		},
		'/iwant': {
			controller: 'IwantController',
			template: 'static/js/views/iwant.html'
		},
		'/iwant-setting': {
			controller: 'IwantSettingController',
			template: 'static/js/views/iwant-setting.html'
		},
		'/send-order': {
			controller: 'SendOrderController',
			template: 'static/js/views/send-order.html'
		},
		'/order-choose': {
			controller: 'OrderChooseController',
			template: 'static/js/views/order-choose.html'
		},
		'/send-order-movie': {
			controller: 'SendOrderController',
			template: 'static/js/views/send-order.html'
		},
		'/order-choose-movie': {
			controller: 'OrderChooseController',
			template: 'static/js/views/order-choose-movie.html'
		},
		'/send-order-enter': {
			controller: 'SendOrderController',
			template: 'static/js/views/send-order.html'
		},
		'/order-choose-enter': {
			controller: 'OrderChooseController',
			template: 'static/js/views/order-choose-enter.html'
		},
		'/send-order-cp': {
			controller: 'SendOrderController',
			template: 'static/js/views/send-order.html'
		},
		'/order-choose-cp': {
			controller: 'OrderChooseController',
			template: 'static/js/views/order-choose-cp.html'
		},
		'/send-order-liren': {
			controller: 'SendOrderController',
			template: 'static/js/views/send-order.html'
		},
		'/order-choose-liren': {
			controller: 'OrderChooseController',
			template: 'static/js/views/order-choose-liren.html'
		},
		'/send-order-bj': {
			controller: 'SendOrderController',
			template: 'static/js/views/send-order.html'
		},
		'/order-choose-bj': {
			controller: 'OrderChooseController',
			template: 'static/js/views/order-choose-bj.html'
		},
		'/send-order-kd': {
			controller: 'SendOrderController',
			template: 'static/js/views/send-order.html'
		},
		'/order-choose-kd': {
			controller: 'OrderChooseController',
			template: 'static/js/views/order-choose-kd.html'
		},
		
		'/mine': {
			controller: 'MineController',
			template: 'static/js/views/mine.html'
		},
		'/wait-order': {
			controller: 'WaitOrderController',
			template: 'static/js/views/wait-order.html'
		},
		'/unpay-order': {
			controller: 'UnpayOrderController',
			template: 'static/js/views/unpay-order.html'
		},
		'/running-order': {
			controller: 'RunningOrderController',
			template: 'static/js/views/running-order.html'
		},
		'/remark-order': {
			controller: 'RemarkOrderController',
			template: 'static/js/views/remark-order.html'
		},
		'/all-order': {
			controller: 'AllOrderController',
			template: 'static/js/views/all-order.html'
		},
		'/chat': {
			controller: 'ChatController',
			template: 'static/js/views/chat.html'
		},
		'/cat-food': {
			controller: 'CatFoodController',
			template: 'static/js/views/cat-food.html'
		},
		'/shop-detail': {
			controller: 'ShopDetailController',
			template: 'static/js/views/shop-detail.html'
		},
		'/shop-detail-ghlp': {
			controller: 'ShopDetailController',
			template: 'static/js/views/shop-detail-ghlp.html'
		},
		'/shop-detail-qjn': {
			controller: 'ShopDetailController',
			template: 'static/js/views/shop-detail-qjn.html'
		},
		'/shop-detail-dn': {
			controller: 'ShopDetailController',
			template: 'static/js/views/shop-detail-dn.html'
		},

		//丰岩&郭峰
		 '/topic-detail': {
            controller: 'TopicController',
            template: 'static/js/views/topic-detail.html'
        },
        '/myzd': {
            controller: 'CommonController',
            template: 'static/js/views/myzd.html'
        },
        '/myfav': {
            controller: 'CommonController',
            template: 'static/js/views/myfav.html'
        },
        '/mycard': {
            controller: 'CommonController',
            template: 'static/js/views/mycard.html'
        },
        '/setting': {
            controller: 'CommonController',
            template: 'static/js/views/setting.html'
        },
        '/feedback': {
            controller: 'CommonController',
            template: 'static/js/views/feedback.html'
        },
        '/mycard-1': {
            controller: 'CommonController',
            template: 'static/js/views/mycard-1.html'
        },
        '/mycard-2': {
            controller: 'CommonController',
            template: 'static/js/views/mycard-2.html'
        },

        //春福
        '/cat-food-xct': {
            controller: 'CatalogController',
            template: 'static/js/views/food/cat-food-xct.html'
        },
        '/cat-food-rbc': {
            controller: 'CatalogController',
            template: 'static/js/views/food/cat-food-rbc.html'
        },
        '/cat-food-hgc': {
            controller: 'CatalogController',
            template: 'static/js/views/food/cat-food-hgc.html'
        },
        '/cat-food-dnyc': {
            controller: 'CatalogController',
            template: 'static/js/views/food/cat-food-dnyc.html'
        },
        '/cat-food-zzc': {
            controller: 'CatalogController',
            template: 'static/js/views/food/cat-food-zzc.html'
        },
        '/cat-food-kc': {
            controller: 'CatalogController',
            template: 'static/js/views/food/cat-food-kc.html'
        },
        '/cat-food-xc': {
            controller: 'CatalogController',
            template: 'static/js/views/food/cat-food-xc.html'
        },
        '/cat-food-dgtd': {
            controller: 'CatalogController',
            template: 'static/js/views/food/cat-food-dgtd.html'
        },
        '/cat-food-sk': {
            controller: 'CatalogController',
            template: 'static/js/views/food/cat-food-sk.html'
        },
        '/cat-food-qt': {
            controller: 'CatalogController',
            template: 'static/js/views/food/cat-food-qt.html'
        },
        '/beauty': {
            controller: 'CatalogController',
            template: 'static/js/views/beauty/beauty.html'
        },
        '/hotel': {
            controller: 'CatalogController',
            template: 'static/js/views/hotel/hotel.html'
        },
        '/zdfw': {
            controller: 'CommonController',
            template: 'static/js/views/zdfw.html'
        }

	};

	app.on('pathChange', function(path){
		
	});

	app.config({
		router: ROUTER,
		view: 'view'
	});


	var ctrls = [
		'RootController', 'IndexController', 'NearbyController',
		'IwantController', 'SendOrderController', 'OrderChooseController',
		'ShopDetailController', 'MineController', 'WaitOrderController',
		'UnpayOrderController', 'RunningOrderController', 'RemarkOrderController',
		'AllOrderController', 'ChatController', 'CatFoodController',
		'TopicController', 'CommonController'
	];

	for(var i=0, len=ctrls.length; i<len; i++){
		createScript(ctrls[i]);
	}

	function createScript(name){
		var script = document.createElement('script');
		script.src = 'static/js/controllers/' + name + '.js';
		document.body.appendChild(script);
	}

})(window);
