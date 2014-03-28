/**
 * GoogleMaps 上でクリックされた位置情報を格納するクラスのモック。
 * 
 * @param {integer} latitude  緯度
 * @param {integer} longitude 経度
 */
var MockPosition = function(latitude, longitude) {
	this.k = (latitude) ? latitude : 1;
	this.A = (longitude) ? longitude : 10;
	this.position = {
		k: this.k,
		A: this.A
	};
};
MockPosition.prototype.toString = function() {
	return this.position.k + ":" + this.position.A;
};
