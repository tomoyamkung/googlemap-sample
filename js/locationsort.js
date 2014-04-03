/**
 * Marker の位置を振り分けるクラス。
 * 
 */
var LocationSort = (function() {

	/**
	 * 基準点となる位置情報。
	 */
	var _center;

	return {
		/**
		 * Marker の位置情報が基準点から次のどのエリアに該当するのかを判定する。
		 *
		 * <ul>
		 * <li>北東。北東エリアに該当する場合 "ne" を返す</li>
		 * <li>北西。北西エリアに該当する場合 "nw" を返す</li>
		 * <li>南東。南東エリアに該当する場合 "se" を返す</li>
		 * <li>南西。南西エリアに該当する場合 "sw" を返す</li>
		 * </ul>
		 *
		 * パラメータの center が設定されている場合は、基準点をこのオブジェクトに切り替える。
		 * center が設定されていない場合(center == null)は、このオブジェクトが保持している基準点で判定する。
		 * 
		 * @param  {Object} center   基準点となる位置情報を保持したオブジェクト
		 * @param  {Object} location Marker の位置情報を保持したオブジェクト
		 * @return {String}          方角を表す文字列
		 */
		judge: function(center, location) {
			var k = location.k; // 緯度
			var A = location.A; // 経度

			if(center != null) {
				_center = center;
			}

			if(_center.k < k && _center.A < A) {
				return "ne";
			} else if(_center.k < k && A < _center.A) {
				return "nw";
			} else if(k < _center.k && _center.A < A) {
				return "se";
			} else if(k < _center.k && A < _center.A) {
				return "sw";
			} else {
				return "";
			}
		}
	};
})();
