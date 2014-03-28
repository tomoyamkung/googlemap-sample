/**
 * 位置情報となる座標を中心点から東西南北のエリア別に保持するクラス。
 * 
 * @param {object} center 中心点となる座標
 */
var LocationSort = (function() {
	var constructor = function(center) {
		/**
		 * 中心点となる座標。
		 * 
		 * @type {object}
		 */
		this.center = center;

		/**
		 * 追加される座標を格納する配列。
		 * 
		 * @type {Array}
		 */
		this.stock = [];

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
			if(this.center.k < location.position.k && this.center.A < location.position.A) {
				this.northeast.push(location);
				this.stock.push(location);
			} else if(this.center.k < location.position.k && location.position.A < this.center.A) {
				this.northwest.push(location);
				this.stock.push(location);
			} else if(location.position.k < this.center.k && this.center.A < location.position.A) {
				this.southeast.push(location);
				this.stock.push(location);
			} else if(location.position.k < this.center.k && location.position.A < this.center.A) {
				this.southwest.push(location);
				this.stock.push(location);
			} 
		},

		/**
		 * 保持している座標をすべて削除する。
		 * 
		 */
		clear: function() {
			this.stock = [];
			this.northeast = [];
			this.northwest = [];
			this.southeast = [];
			this.southwest = [];
		}
	};	

	return constructor;
})(); // モジュールパターンによるクラス定義(http://ledsun.hatenablog.com/entry/2013/09/17/180723)
