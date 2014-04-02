/**
 * トグルボタンの状態を保持するクラス。
 * 
 */
var ToggleBoard = (function() {

	/**
	 * コンストラクタ関数。
	 * 
	 */
	var constructor = function() {

		/**
		 * 「北東エリア」のボタン。
		 * 
		 * @type {Boolean} true の場合、非表示を表す
		 */
		this.ne = false;

		/**
		 * 「北西エリア」のボタン。

		 * @type {Boolean} true の場合、非表示を表す
		 */
		this.nw = false;

		/**
		 * 「南東エリア」のボタン。
		 * 
		 * @type {Boolean} true の場合、非表示を表す
		 */
		this.se = false;

		/**
		 * 「南西エリア」のボタン。
		 * 
		 * @type {Boolean} true の場合、非表示を表す
		 */
		this.sw = false;
	};

	/**
	 * トグルボタンの状態を切り替える。
	 *
	 * 選択中になっていたものは、状態を非選択中に変更する。
	 * 
	 * @param  {String} id トグルボタンの ID 属性名称
	 */
	constructor.prototype = {
		toggle: function(id) {
			if(id === "ne") {
				this.ne = !this.ne;
			} else if(id === "nw") {
				this.nw = !this.nw;
			} else if(id === "se") {
				this.se = !this.se;
			} else if(id === "sw") {
				this.sw = !this.sw;
			}
		},
		isHideDirection: function(direction) {
			var result = false;
			if(direction === "ne" && this.ne === true) {
				result = true;
			} else if(direction === "nw" && this.nw === true) {
				result = true;
			} else if(direction === "se" && this.se === true) {
				result = true;
			} else if(direction === "sw" && this.sw === true) {
				result = true;
			} 
			return result;
		}
	};

	return constructor;
})();
