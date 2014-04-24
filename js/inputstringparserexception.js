/**
 * 入力欄に入力された文字列の書式が不適切な場合に使用する例外オブジェクト。
 * 
 * @param {String} message 例外エラーメッセージ
 */
var InputStringParserException = function(message) {
	this.name = "inputstringparser";
	this.message = message || "緯度・経度指定の書式が異なります。";
};

InputStringParserException.prototype = new Error();
InputStringParserException.prototype.constructor = InputStringParserException;
