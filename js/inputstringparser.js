/**
 * 入力欄に入力された文字列を解析するオブジェクト。
 *
 */
var InputStringParser = (function() {

    return {
        /**
         * 緯度・経度が入力されたかを問い合わせる。
         *
         * @param  {String}  input 入力された文字列
         * @return {Boolean}       緯度・経度の場合 true
         * @throws {SyntaxError} コロンが複数ある場合
         */
        isLatLng: function(input) {
            var indexOf = input.indexOf(":");
            if (indexOf <= 0) {
                return false;
            }

            var count = input.split(":").length;
            if (count != 2) {
                throw new InputStringParserException();
            }
            return true;
        }
    };
})();
