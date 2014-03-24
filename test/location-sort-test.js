
module("LocationSort の生成に関するテスト");
test("LocationSort の生成", function() {
	var center = new MockLocation(); // 中心点となる座標
	var locationSort = new LocationSort(center);

	notStrictEqual(locationSort, undefined);
	strictEqual(locationSort.hasNortheast(), false);
	strictEqual(locationSort.hasNorthwest(), false);
	strictEqual(locationSort.hasSoutheast(), false);
	strictEqual(locationSort.hasSouthwest(), false);
});

module("北東の位置に Location を格納するテスト");
var center = new MockLocation(35.7100327, 139.81071550000001); // 中心点となる座標
test("北東の位置に Location を格納するテスト", function() {
	var locationSort = new LocationSort(center);

	
});