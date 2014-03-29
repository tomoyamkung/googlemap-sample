/**
 * トグルボタンの状態を保持するクラス。
 * 
 */
var ToggleBoard = (function() {

	/**
	 * コンストラクタ関数。
	 * 
	 * 各エリアボタンのクリックイベントを設定する。
	 * 
	 * @param  {object} ne
	 * @param  {object} nw
	 * @param  {object} se
	 * @param  {object} sw
	 */
	var constructor = function(ne, nw, se, sw) {

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

		var self = this;
		
		ne.click(function() {
			self.ne = !self.ne;
		});

		nw.click(function() {
			self.nw = !self.nw;
		});

		se.click(function() {
			self.se = !self.se;
		});

		sw.click(function() {
			self.sw = !self.sw;
		});

	};

	return constructor;
})();
