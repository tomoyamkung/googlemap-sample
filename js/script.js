$(function() {
	var geocoder = new google.maps.Geocoder();

	// 初期表示
	var address = $('#address').val();
	geocoder.geocode({'address': address}, callbackRender);

	// 住所が入力された場合の対応
	$('#address').change(function(event) {
		address = $(this).val();
		geocoder.geocode({'address': address}, callbackRender);
	});
});

/**
 * ジオコーダの結果を取得したときに実行するコールバック関数。
 * 
 * この関数内で GoogleMap を出力する。
 * 
 * @param results ジオコーダの結果
 * @param status ジオコーディングのステータス
 * 
 */
function callbackRender(results, status) {
	if(status == google.maps.GeocoderStatus.OK) {
		var options = {
			zoom: 18,
			center: results[0].geometry.location, // 指定の住所から計算した緯度経度を指定する
			mapTypeId: google.maps.MapTypeId.ROADMAP // 「地図」で GoogleMap を出力する
		};
		var gmap = new google.maps.Map(document.getElementById('map-canvas'), options);
			// #map-canvas に GoogleMap を出力する

		setupMarker(gmap, results[0].geometry.location);
			// 初期値の住所から計算した緯度経度の位置に Marker を立てる
		google.maps.event.addListener(gmap, 'click', function(event) {
			// GoogleMap 上で左クリックがあったら、、、
			setupMarker(gmap, event.latLng);
				// その場所に Marker を立てる
		});

		adjustMapSize();
	}
}

/**
 * 指定の場所に InfoWindow を設定した Marker を表示する。
 * 
 * @param  {Object} map Marker を立てる GoogleMap オブジェクト
 * @param  {Object} location Marker を立てる位置
 */
function setupMarker(map, location) {
	var marker = new google.maps.Marker({map: map, position: location}); // Marker オブジェクトを生成する

	var infoWindow = createInfoWindow(location.d, location.e); // InfoWindow オブジェクトを生成し、、、
	infoWindow.open(marker.getMap(), marker); // InfoWindow を表示する
}


/**
 * InfoWindow オブジェクトを生成する。
 * 
 * @param  {Number} latitude 緯度
 * @param  {Number} longitude 経度
 * @return {Object} InfoWindow オブジェクト
 */
function createInfoWindow(latitude, longitude) {
	var infoWindow = new google.maps.InfoWindow({
		content: createTag(latitude, longitude), // InfoWindow に表示するコンテンツ
		// maxWidth: 1000 // width は CSS で制御するようにしたのでコメントアウト
	});
	return infoWindow;
}

/**
 * InfoWindow 内に設定する HTML を生成する。
 *
 * HTML の生成は Underscore.js を使い、テンプレートは index.html 内に定義してある。
 * 
 * @param  {Number} latitude 緯度
 * @param  {Number} longitude 経度
 * @return {Object} InfoWindow に設定するタグ
 */
function createTag(latitude, longitude) {
	var template = _.template($('#infowindow_template').text());
	var tag = template({latitude: latitude, longitude: longitude});
	return tag;
}

/**
 * GoogleMap を表示する div タグのサイズを調整する。
 * 
 */
function adjustMapSize() {
	var padding = $('#header-hollow').height(); // 住所入力欄の height を取得

	var mapCanvas = $('#map-canvas');
	mapCanvas.css("height", ($(window).height() - mapCanvas.offset().top) - padding + "px");
}