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
		var marker = new google.maps.Marker({map: gmap, position: results[0].geometry.location});
			// 指定の住所から計算した緯度経度の位置に Marker を立てる

		var infoWindow = createInfoWindow(results); // InfoWindow オブジェクトを生成し、
		infoWindow.open(marker.getMap(), marker); // 初期表示で InfoWindow を表示する
		google.maps.event.addListener(marker, 'click', function(event) {
 			infoWindow.open(marker.getMap(), marker);
 				// Marker をクリックしても InfoWindow を表示する
		});

		adjustMapSize();
	}
}

/**
 * InfoWindow オブジェクトを生成する。
 * 
 * @param result ジオコーダの実行結果
 * 
 */
function createInfoWindow(result) {
	var infoWindow = new google.maps.InfoWindow({
		content: createTag(result), // InfoWindow に表示するコンテンツ
		maxWidth: 500
	});
	return infoWindow;
}

/**
 * InfoWindow 内に設定する HTML を生成する。
 *
 * HTML の生成は Underscore.js を使い、テンプレートは index.html 内に定義してある。
 *
 * @param result ジオコーダの実行結果
 * 
 */
function createTag(result) {
	var latitude = result[0].geometry.location.d; // 緯度
	var longitude = result[0].geometry.location.e; // 経度
	var template = _.template($('#infowindow_template').text());
	var tag = template({latitude: latitude, longitude: longitude});
	return tag;
}

/**
 * GoogleMap を表示する部分のサイズを調整する。
 * 
 */
function adjustMapSize() {
	var mapCanvas = $('#map-canvas');
	var marginBottom = 5; // CSS に定義してある margin の値
	mapCanvas.css("height", ($(window).height() - mapCanvas.offset().top - marginBottom) + "px");
}
