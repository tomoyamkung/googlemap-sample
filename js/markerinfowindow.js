/**
 * GoogleMaps 上に表示する Marker と、その Marker の InfoWindow を保持するクラス。
 * 
 */
var MarkderInfoWindow = (function() {

	/**
	 * コンストラクタ関数。
	 * 
	 * @param  {Object} marker Marker オブジェクト
	 * @param  {Object} location Maker の緯度・経度を格納したオブジェクト
	 * @param  {Object} centerLocation GoogleMaps 上の中心点となる緯度・経度を格納したオブジェクト
	 */
	var constructor = function(marker, location, centerLocation) {
		this.marker = marker;
		this.infoWindow = this.createInfoWindow(location);
		this.direction = LocationSort.judge(centerLocation, location);

		this.showInfoWindow();
	};

	constructor.prototype = {
		/**
		 * InfoWindow を表示する。
		 * 
		 * @param  {Object} location Marker の緯度・経度を格納したオブジェクト
		 * @return {Object}          InfoWindow オブジェクト
		 */
		createInfoWindow: function(location) {
			var template = _.template($('#infowindow_template').text());
			var tag = template({
				latitude: location.k,
				longitude: location.A
			});
			return new google.maps.InfoWindow({
				content: tag
			});
		},
		/**
		 * InfoWindow を表示する。
		 * 
		 */
		showInfoWindow: function() {
			this.infoWindow.open(this.marker.getMap(), this.marker);
		},
		/**
		 * InfoWindow を非表示にする。
		 * 
		 */
		hideInfoWindow: function() {
			this.infoWindow.close();
		},
		/**
		 * Marker と InfoWindow の表示を切り替える。
		 * 
		 * @param  {Object} toggleBoard 表示・非表示を判定するオブジェクト
		 */
		toggle: function(toggleBoard) {
			if(toggleBoard.isHideDirection(this.direction)) { // この方角が非表示ならば
				this.marker.setVisible(false); // Marker を非表示にする
				this.hideInfoWindow(); // InfoWindow を非表示にする
			} else {
				this.marker.setVisible(true); // Marker を表示する
			}
		}
	};

	return constructor;
	
})();
