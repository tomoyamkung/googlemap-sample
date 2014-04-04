
var board = new ToggleBoard();
var stock = new Stock();
var centerLocation = null;
var gmap = null;

$(function() {
	var geocoder = new google.maps.Geocoder();

	// 初期表示
	geocoder.geocode({'address': $('#address').val()}, callbackRender);

	// Marker ボタンがクリックされた場合の対応
	$('#header-hollow button').click(function(event) {
		var inputString = $('#address').val();
		if(InputStringParser.isLatLng(inputString)) {
			var array = inputString.split(":");
			showMaker(new google.maps.LatLng(array[0], array[1]));
		} else {
			geocoder.geocode({'address': inputString}, callbackRender);
		}
	});

	setUpToggleButtons();
	setUpDeleteButton();
});

/**
 * 削除ボタンクリック時の処理を行う。
 * 
 */
function setUpDeleteButton() {
	$('#button-delete').click(function(event) {
		stock.init();
		board.init();
		// 画面に表示されているボタンも初期化する
	});
}

/**
 * トグルボタンがクリックされたら ID 属性名称を取得して、`ToggleBoard#toggle` を実行する。
 * 
 */
function setUpToggleButtons() {
	$('button[data-toggle]').click(function() {
		var id = $(this).attr('id');
		board.toggle(id);
		stock.toggle(board);
	});
}

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
		if(gmap == null) {
			centerLocation = new Location(results[0].geometry.location);
				// この緯度・経度が中心点となるので Location オブジェクトを生成する	
			createGoogleMaps(results[0].geometry.location);
		}

		showMaker(results[0].geometry.location);
			// 初期値の住所から計算した緯度経度の位置に Marker を立てる
		google.maps.event.addListener(gmap, 'click', function(event) {
			// GoogleMap 上で左クリックがあったら、、、
			showMaker(event.latLng);
				// その場所に Marker を立てる
		});

		adjustMapSize();
	}
}

/**
 * Map オブジェクトを生成して、画面に表示する。
 * 
 * @param  {Object} location 緯度経度を格納したオブジェクト
 */
function createGoogleMaps(location) {
	var options = {
		zoom: 18,
		center: location, // 指定の住所から計算した緯度経度を指定する
		mapTypeId: google.maps.MapTypeId.ROADMAP // 「地図」で GoogleMap を出力する
	};
	gmap = new google.maps.Map(document.getElementById('map-canvas'), options);
		// #map-canvas に GoogleMap を出力する
}

/**
 * 指定の場所に InfoWindow を設定した Marker を表示する。
 * 
 * @param  {Object} map Marker を立てる GoogleMap オブジェクト
 * @param  {Object} location Marker を立てる位置
 */
function showMaker(location) {
	var marker = new google.maps.Marker({map: gmap, position: location});
		// Marker オブジェクトを生成して、地図上に表示する

	var markerInfoWindow = new MarkderInfoWindow(marker, new Location(location), centerLocation);
	google.maps.event.addListener(marker, 'click', function(event) { // Marker がクリックされたら、、、
		stock.hideInfoWindow(); // すべての InfoWindow を非表示にして、、、
		markerInfoWindow.showInfoWindow(); // この Marker の InfoWindow だけ表示する
	});
	stock.add(markerInfoWindow);
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
