app.controller('IwantController', function(){
	var scope = this;
	var data = null;
	var index = 0;
	var angel = 0;

	var wh = $(window).height()-80;

	$('#pan-wrap').height(wh);
	$('#order-view').height(wh);


	$.getJSON('static/data/iwant-data.json?t='+ new Date().getTime(), function(result){
		data = result.data;
		setUp();
	});

	function setUp(){
		$('#pan-text1').addClass('active');
		buildList();

		var hander;
		$("#pan .pan-text").swipe({
        	swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
	          	if(direction == 'up'){
	          		if(hander){
			    		clearTimeout(hander);
			    	}
			    	hander = setTimeout(function(){
			    		--index;
			    		angel -= 36;

			    		if(index<0){
			    			index = 9;
			    		}
			    		handlerRotate();
			    	}, 200);
	          	} else if(direction == 'down') {
	          		if(hander){
			    		clearTimeout(hander);
			    	}
			    	hander = setTimeout(function(){
			    		++index;
			    		angel += 36;
			    		if(index == 10){
			    			index = 0;
			    		}
			    		handlerRotate();
			    	}, 200);
	          	}
	        },
        	//Default is 75px, set to 0 for demo so any distance triggers swipe
         	threshold: 0
      	});

	    function handlerRotate(){
	    	$('#pan .pan-text .active').removeClass('active');
    		$('#pan-text'+ (index+1)).addClass('active');
    		$('#pan').css('-webkit-transform', 'rotate(' + angel + 'deg)');
    		buildList();
	    }
	}

	function buildList(){

		var list = data[index].list;

		$('#pan-list').remove();
		var panlist = $('<div id="pan-list" class="swiper-container"></div>');

		var htmls = [];
		htmls.push('<ul class="swiper-wrapper">');
		for(var i=0, len=list.length; i<len; i++){
			var item = list[i];
			htmls.push('<li class="swiper-slide" cid="' + item.catalog + '" index="' + i + '">'+ item.name +'</li>');
		}
		htmls.push('</ul>');
		panlist.html(htmls.join(''));

		panlist.appendTo($('#pan-wrap'));
		panlist.height(wh);
		var count = Math.floor(wh/60);
		// if(panlist.height() > wh){
		// 	panlist.css('top', 0);
		// } else {
		// 	panlist.css('top', (wh-40-panlist.height())/2);
		// }

		var swiper = new Swiper('#pan-list', {
			direction: 'vertical',
	        grabCursor: true,
	        slidesPerView: count
	    });

	    panlist.delegate('li', 'click', function(e){
	    	var cur = $(e.currentTarget);
	    	var ov = $('#order-view');
	    	var pw = $('#pan-wrap');
	    	var w = $('body').width();

			$('#pan-list li').removeClass('active');
			cur.addClass('active');
			ov.css('left', w).show();
			setTimeout(function(){
				ov.css('left', w-60);
			}, 0);
			
			setTimeout(function(){
				pw.css({left: -(w*0.7)});
				ov.css({left: w*0.3});
			}, 1000);

			var idx = cur.attr('index');
			var tpl = list[idx].template;
			$.get('static/js/views/template/'+ tpl + '?t=' + new Date(), function(text){
				ov.html(text);

				$('#orderCancel').on('click', function(){
					$('#pan-wrap').css({left: 0});

					ov.css('left', w);
				});
			});

		});


	}

	
});