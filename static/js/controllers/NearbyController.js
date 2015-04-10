app.controller('NearbyController', function(){
	var scope = this;

	var wh = $(window).height()-40;
	if(wh > $('body').height()){
		$('body').height(wh);
	}
	$('.app-body').height(wh);

	
	var point = new BMap.Point(116.307925, 40.056874);
	var map = new BMap.Map("mapContainer");
	map.centerAndZoom(point, 14);
	map.enableScrollWheelZoom(true);

	var marker = new BMap.Marker(point);  // 创建标注
	map.addOverlay(marker);

	var foodPt = new BMap.Point(116.3089, 40.0592);
	var foodIcon = new BMap.Icon("/static/images/marker-food.png", new BMap.Size(25,25));
	var food = new BMap.Marker(foodPt, {icon: foodIcon});  // 创建标注
	map.addOverlay(food);

	var foodPt = new BMap.Point(116.3089, 40.0592);
	var foodIcon = new BMap.Icon("/static/images/marker-food.png", new BMap.Size(25,25));
	var food = new BMap.Marker(foodPt, {icon: foodIcon});  // 创建标注
	map.addOverlay(food);

	var lifePt = new BMap.Point(116.313282,39.984844);
	var lifeIcon = new BMap.Icon("/static/images/marker-life.png", new BMap.Size(25,25));
	var life = new BMap.Marker(lifePt, {icon: foodIcon});  // 创建标注
	map.addOverlay(life);

	var lifePt = new BMap.Point(116.306555,40.059005);
	var lifeIcon = new BMap.Icon("/static/images/marker-life.png", new BMap.Size(25,25));
	var life = new BMap.Marker(lifePt, {icon: lifeIcon});  // 创建标注
	map.addOverlay(life);

	var hotelPt = new BMap.Point(116.310694,40.048152);
	var hotelIcon = new BMap.Icon("/static/images/marker-hotel.png", new BMap.Size(25,25));
	var hotel = new BMap.Marker(hotelPt, {icon: hotelIcon});  // 创建标注
	map.addOverlay(hotel);

	var enterPt = new BMap.Point(116.309607,40.048083);
	var enterIcon = new BMap.Icon("/static/images/marker-enter.png", new BMap.Size(25,25));
	var enter = new BMap.Marker(enterPt, {icon: enterIcon});  // 创建标注
	map.addOverlay(enter);

	var enterPt2 = new BMap.Point(116.300146,40.040751);
	var enterIcon2 = new BMap.Icon("/static/images/marker-enter.png", new BMap.Size(25,25));
	var enter2 = new BMap.Marker(enterPt2, {icon: enterIcon2});  // 创建标注
	map.addOverlay(enter2);

	new Swiper('.sub-cat', {
        spaceBetween: 10,
        slidesPerView: 'auto'
    });
	
});