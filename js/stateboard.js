/**
 * トグルボタンの状態を保持するクラス。
 * 
 */
var ToggleBoard = (function() {

	/**
	 * 表示を表す識別子。
	 * 
	 */
	var show = false;

	/**
	 * 非表示を表す識別子。
	 * 
	 */
	var hide = true;	

	/**
	 * コンストラクタ関数。
	 *
	 * 各方角の表示・非表示フラグを初期化する。
	 * 初期状態は「表示」とする。
	 * 
	 */
	var constructor = function() {

		/**
		 * 「北東エリア」のフラグ。
		 * 
		 * @type {Boolean} true の場合、非表示を表す
		 */
		this.ne = show;

		/**
		 * 「北西エリア」のフラグ。

		 * @type {Boolean} true の場合、非表示を表す
		 */
		this.nw = show;

		/**
		 * 「南東エリア」のフラグ。
		 * 
		 * @type {Boolean} true の場合、非表示を表す
		 */
		this.se = show;

		/**
		 * 「南西エリア」のフラグ。
		 * 
		 * @type {Boolean} true の場合、非表示を表す
		 */
		this.sw = show;
	};

	constructor.prototype = {
		/**
		 * トグルボタンの状態を切り替える。
		 *
		 * 選択中になっていたものは、状態を非選択中に変更する。
		 * 
		 * @param  {String} id トグルボタンの ID 属性名称
		 */
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
		/**
		 * パラメータで受け取った「方角」が非表示のエリアなのかを問い合わせる。
		 * 
		 * @param  {String}  direction 方角
		 * @return {Boolean}           非表示のエリアなら true
		 */
		isHideDirection: function(direction) {
			var result = show;
			if(direction === "ne" && this.ne === hide) {
				result = hide;
			} else if(direction === "nw" && this.nw === hide) {
				result = hide;
			} else if(direction === "se" && this.se === hide) {
				result = hide;
			} else if(direction === "sw" && this.sw === hide) {
				result = hide;
			} 
			return result;
		},
		/**
		 * トグルボタンの状態を初期化する。
		 * 
		 */
		init: function() {
			this.ne = show;
			this.nw = show;
			this.se = show;
			this.sw = show;
		}
	};

	return constructor;
})();
