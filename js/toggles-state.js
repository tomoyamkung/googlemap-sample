/**
 * トグルボタンの状態を保持するクラス。
 * 
 */
var TogglesState = (function() {

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
	 * 各エリアボタンのクリックイベントをバインドする。
	 * 
	 * @param  {object} neButton
	 * @param  {object} nwButton
	 * @param  {object} seButton
	 * @param  {object} swButton
	 */
	constructor.prototype.bindButtons = function(neButton, nwButton, seButton, swButton) {
		var self = this;
		
		neButton.click(function() {
			self.ne = !self.ne;
		});

		nwButton.click(function() {
			self.nw = !self.nw;
		});

		seButton.click(function() {
			self.se = !self.se;
		});

		swButton.click(function() {
			self.sw = !self.sw;
		});

	};

	return constructor;
})();
