/**
 * 位置情報となる座標を中心点から東西南北のエリア別に保持するクラス。
 * 
 * @param {object} center 中心点となる座標
 */
var Markers = (function() {
	var constructor = function(center) {
		/**
		 * 中心点となる座標。
		 * 
		 * @type {object}
		 */
		this.center = center;

		/**
		 * 中心点から北東の位置にある Location を格納する配列。
		 * 
		 * @type {Array}
		 */
		this.northeast = [];

		/**
		 * 中心点から北西の位置にある Location を格納する配列。
		 * 
		 * @type {Array}
		 */
		this.northwest = [];

		/**
		 * 中心点から南東の位置にある Location を格納する配列。
		 * 
		 * @type {Array}
		 */
		this.southeast = [];

		/**
		 * 中心点から南西の位置にある Location を格納する配列。
		 * 
		 * @type {Array}
		 */
		this.southwest = [];
	};

	constructor.prototype = {
		/**
		 * 座標を追加する。
		 *
		 * 追加する座標は、フィールドに緯度と経度を次の名前で定義してあること。
		 *
		 * <ul>
		 * <li>緯度: k</li>
		 * <li>経度: A</li>
		 * </ul>
		 * 
		 * @param {object} location 座標オブジェクト
		 */
		add: function(location) {
			var result = LocationSort.judge(this.center, location);
			if(result === "ne") {
				this.northeast.push(location);
			} else if(result === "nw") {
				this.northwest.push(location);
			} else if(result === "se") {
				this.southeast.push(location);
			} else if(result === "sw") {
				this.southwest.push(location);
			} 
		},

		/**
		 * 保持している座標をすべて削除する。
		 * 
		 */
		clear: function() {
			this.northeast = [];
			this.northwest = [];
			this.southeast = [];
			this.southwest = [];
		},
		/**
		 * Marker の表示を反転する。
		 *
		 * ブラグが立っているエリアの Marker の表示を反転する。
		 * 
		 * @param  {Boolean} ne 北東エリアのフラグ
		 * @param  {Boolean} nw 北西エリアのフラグ
		 * @param  {Boolean} se 南東エリアのフラグ
		 * @param  {Boolean} sw 南西エリアのフラグ
		 */
		toggleMarker: function(ne, nw, se, sw) {
			this.northeast.forEach(function(marker, i) {
				marker.setVisible(!ne);
			});

			this.northwest.forEach(function(marker, i) {
				marker.setVisible(!nw);
			});

			this.southeast.forEach(function(marker, i) {
				marker.setVisible(!se);
			});

			this.southwest.forEach(function(marker, i) {
				marker.setVisible(!sw);
			});
			
		}
	};	

	return constructor;
})();
