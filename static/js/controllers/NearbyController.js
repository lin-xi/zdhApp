app.controller('NearbyController', function(){
	var scope = this;

	var wh = $(window).height()-40;
	if(wh > $('body').height()){
		$('body').height(wh);
	}
	$('.app-body').height(wh);

	
	var point = new BMap.Point(116.307925, 40.056874);
	var map = new BMap.Map("mapContainer");
	map.centerAndZoom(point, 15);
	map.enableScrollWheelZoom(true);


	var marker = new BMap.Marker(point);  // 创建标注
	map.addOverlay(marker);      

	
});