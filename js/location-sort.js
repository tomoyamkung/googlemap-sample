/**
 * 位置情報となる座標を中心点から東西南北のエリア別に保持するクラス。
 * 
 * @param {object} center 中心点となる座標
 */
var LocationSort = function(center) {
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

LocationSort.prototype = {
	/**
	 * 中心点から北東のエリアの座標を保持しているかを問い合わせる。
	 * 
	 * @return {Boolean} 保持している場合 true
	 */
	hasNortheast: function() {
		return 0 < this.northeast.length;
	},
	/**
	 * 中心点から北西のエリアの座標を保持しているかを問い合わせる。
	 * 
	 * @return {Boolean} 保持している場合 true
	 */
	hasNorthwest: function() {
		return 0 < this.northwest.length;
	},
	/**
	 * 中心点から南東のエリアの座標を保持しているかを問い合わせる。
	 * 
	 * @return {Boolean} 保持している場合 true
	 */
	hasSoutheast: function() {
		return 0 < this.southeast.length;
	},
	/**
	 * 中心点から南西のエリアの座標を保持しているかを問い合わせる。
	 * 
	 * @return {Boolean} 保持している場合 true
	 */
	hasSouthwest: function() {
		return 0 < this.southwest.length;
	},

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
		if(this.center.k < location.k && this.center.A < location.A) {
			this.northeast.push(location);
			this.stock.push(location);
		} else if(this.center.k < location.k && location.A < this.center.A) {
			this.northwest.push(location);
			this.stock.push(location);
		} else if(location.k < this.center.k && this.center.A < location.A) {
			this.southeast.push(location);
			this.stock.push(location);
		} else if(location.k < this.center.k && location.A < this.center.A) {
			this.southwest.push(location);
			this.stock.push(location);
		} 
	},

	/**
	 * 中心点から北東のエリアの座標を取得する。
	 * 
	 * @return {Array} 
	 */
	getNortheast: function() {
		return this.northeast;
	},
	/**
	 * 中心点から北西のエリアの座標を取得する。
	 * 
	 * @return {Array} 
	 */
	getNorthwest: function() {
		return this.northwest;
	},
	/**
	 * 中心点から南東のエリアの座標を取得する。
	 * 
	 * @return {Array}
	 */
	getSoutheast: function() {
		return this.southeast;
	},
	/**
	 * 中心点から南西のエリアの座標を取得する。
	 * 
	 * @return {Array}
	 */
	getSouthwest: function() {
		return this.southwest;
	},
	/**
	 * 追加した全座標を取得する。
	 * 
	 * @return {Array}
	 */
	getAll: function() {
		return this.stock;
	}

};
