/**
 * トグルボタンの状態を保持するクラス。
 * 
 */
var TogglesState = function() {
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
TogglesState.prototype = {
	/**
	 * 各トグルボタンにクリックイベントをバインドする。
	 * 
	 * @param  {object} neButton
	 * @param  {object} nwButton
	 * @param  {object} seButton
	 * @param  {object} swButton
	 */
	bindButtons: function(neButton, nwButton, seButton, swButton) {
		var x = this;
		neButton.click(function() {
			x.ne = !x.ne;
		});

		nwButton.click(function() {
			x.nw = !x.nw;
		});

		seButton.click(function() {
			x.se = !x.se;
		});

		swButton.click(function() {
			x.sw = !x.sw;
		});
	}
};
