/**
 * Marker の緯度・経度を格納するクラス。
 *
 */
var Location = (function() {

    /**
     * コンストラクタ関数。
     *
     * @param  {Object} src 位置情報を保持したオブジェクト
     */
    var constructor = function(src) {
        if (src.position == null) {
            this.k = src.k; // 緯度
            this.A = src.A; // 経度
        } else {
            this.k = src.position.k;
            this.A = src.position.A;
        }
    };

    return constructor;

})();
