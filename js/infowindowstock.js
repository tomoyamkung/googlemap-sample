/**
 * InfoWinow オブジェクトをストックするクラス。
 * 
 */
var InfoWindowStock = function() {
	/**
	 * InfoWindow をストックするハッシュ。
	 * @type {Array}
	 */
	this.stock = [];
	this.currentInfoWindow;
};
InfoWindowStock.prototype = {
	/**
	 * ストックする InfoWindow のキーを生成する。
	 * 
	 * @param  {Object} location 緯度・経度を格納したオブジェクト
	 * @return {String} 生成したキー
	 */
	createKey: function(location) {
		var key = location.k + ":" + location.A;
		return key;
	},
	/**
	 * InfoWindow をストックする。
	 * 
	 * @param  {Object} location 緯度・経度を格納したオブジェクト
	 * @param  {Object} infoWindow ストックする InfoWindow オブジェクト
	 */
	put: function(location, marker) {
		this.disableCurrentInfoWindow();

		var infoWindow = this.createInfoWindow(location.k, location.A); // InfoWindow オブジェクトを生成し、、、
		infoWindow.open(marker.getMap(), marker); // InfoWindow を表示し、、、	

		var key = this.createKey(location);
		this.stock[key] = infoWindow;

		this.currentInfoWindow = infoWindow;
	},
	/**
	 * ストックしてある InfoWindow から該当するものを取得する。
	 * 
	 * @param  {Object} location 緯度・経度を格納したオブジェクト
	 * @return {Object} ストックしてあった InfoWindow オブジェクト
	 */
	redisplay: function(location, marker) {
		this.disableCurrentInfoWindow();
		
		var key = this.createKey(location);
		var infoWindow = this.stock[key];
		infoWindow.open(marker.getMap(), marker); // Marker に InfoWindow を表示する
		
		this.currentInfoWindow = infoWindow;
	},
	/**
	 * InfoWindow オブジェクトを生成する。
	 *
	 * InfoWindow には HTML を設定する。
	 * HTML の生成は Underscore.js を使い、テンプレートは index.html 内に定義してある。
	 * 
	 * @param  {Number} latitude 緯度
	 * @param  {Number} longitude 経度
	 * @return {Object} InfoWindow オブジェクト
	 */
	createInfoWindow: function(latitude, longitude) {
		var template = _.template($('#infowindow_template').text());
		var tag = template({latitude: latitude, longitude: longitude});
		var infoWindow = new google.maps.InfoWindow({
			content: tag
			// maxWidth: 1000 // width は CSS で制御するようにしたのでコメントアウト
		});
		return infoWindow;
	},
	/**
	 * 表示中の InfoWindow があれば非表示にする。
	 * 
	 */
	disableCurrentInfoWindow: function() {
		if(this.currentInfoWindow) {
			this.currentInfoWindow.close();
		}
	}	
};
