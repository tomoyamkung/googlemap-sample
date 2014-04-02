/**
 * MarkderInfoWindow オブジェクトを格納するクラス。
 * 
 */
var Stock = (function() {

	/**
	 * コンストラクタ関数。
	 *
	 * MarkderInfoWindow を格納する配列を生成する。
	 * 
	 */
	var constructor = function() {
		this.array = []; // この配列に格納する
	};

	constructor.prototype = {
		/**
		 * ストックに MarkderInfoWindow オブジェクトを追加する。
		 * 
		 * @param {Object} markerInfoWindow MarkderInfoWindow オブジェクト
		 */
		add: function(markerInfoWindow) {
			this.hideInfoWindow();
			this.array.push(markerInfoWindow);
		},
		/**
		 * 全 Marker の InfoWindow を非表示にする。
		 * 
		 */
		hideInfoWindow: function() {
			this.array.forEach(function(element, i) {
				element.hideInfoWindow();
			});
		},
		/**
		 * 保持している MarkerInfoWindow に対して　MarkerInfoWindow#toggle を実行する。
		 * 
		 * @param  {Object} toggleBoard 表示・非表示を判定するオブジェクト
		 */
		toggle: function(toggleBoard) {
			this.array.forEach(function(element, i) {
				element.toggle(toggleBoard);
			});
		}
	};

	return constructor;

})();
