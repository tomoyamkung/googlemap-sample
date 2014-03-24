/**
 * 位置情報を格納するクラスのモック。
 * 
 * @param {integer} latitude  緯度
 * @param {integer} longitude 経度
 */
var MockLocation = function(latitude, longitude) {
	this.k = 1;
	if(latitude) {
		this.k = latitude;
	}

	this.A = 10;
	if(longitude) {
		this.A = longitude;
	}
};