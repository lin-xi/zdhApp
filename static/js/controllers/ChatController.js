app.controller('ChatController', function(){
	var wh = $(window).height()-40;
	if(wh > $('body').height()){
		$('body').height(wh);
	}
	$('.app-body').height(wh);

	var cl = $('.chat-list');


	$('#editor').on('keydown', function(e){
		var cur = $(e.currentTarget);

		if(e.which == 13){
			var html = cur.html();
			if(html){
				sendMessage(html);
				cur.html('');

				e.preventDefault();
				e.stopPropagation();
			}
		}

	});

	function sendMessage(msg){
		$('<div class="send-msg"><span class="msg-holder">'+ msg +'</span><img class="user-avatar" width="60" height="60px" src="static/images/avatar.jpg"/></div>').appendTo(cl);
	}

	function receiveMessage(){
		$('<div class="recv-msg"><span class="msg-holder">'+ msg +'</span><img class="user-avatar" width="60" height="60px" src="/static/images/shop/huoguo4.png"/></div>').appendTo(cl);
	}
	
});