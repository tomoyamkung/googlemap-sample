
module("LocationSort の生成に関するテスト");
test("LocationSort の生成", function() {
	var center = new MockLocation(); // 中心点となる座標
	var locationSort = new LocationSort(center);

	notStrictEqual(locationSort, undefined);
	strictEqual(locationSort.northeast.length, 0);
	strictEqual(locationSort.northwest.length, 0);
	strictEqual(locationSort.southeast.length, 0);
	strictEqual(locationSort.southwest.length, 0);
});

module("Location の追加と取得");
var sut;
QUnit.testStart(function() {
	var center = new MockLocation(35.7100327, 139.81071550000001); // 中心点となる座標
	sut = new LocationSort(center);
});

test("北東の位置に Location を格納するテスト", function() {
	var location = new MockPosition(35.71051115238239, 139.81199026107788);
	sut.add(location);
	
	// Verify
	strictEqual(sut.northeast.length, 1);
	strictEqual(sut.northwest.length, 0);
	strictEqual(sut.southeast.length, 0);
	strictEqual(sut.southwest.length, 0);

});

test("北西の位置に Location を格納するテスト", function() {
	var location = new MockPosition(35.711064334670354, 139.80910420417786);
	sut.add(location);
	
	// Verify
	strictEqual(sut.northeast.length, 0);
	strictEqual(sut.northwest.length, 1);
	strictEqual(sut.southeast.length, 0);
	strictEqual(sut.southwest.length, 0);

});

test("南東の位置に Location を格納するテスト", function() {
	var location = new MockPosition(35.709221830730314, 139.81190979480743);
	sut.add(location);
	
	// Verify
	strictEqual(sut.northeast.length, 0);
	strictEqual(sut.northwest.length, 0);
	strictEqual(sut.southeast.length, 1);
	strictEqual(sut.southwest.length, 0);

});

test("南西の位置に Location を格納するテスト", function() {
	var location = new MockPosition(35.708864650097084, 139.80906665325165);
	sut.add(location);
	
	// Verify
	strictEqual(sut.northeast.length, 0);
	strictEqual(sut.northwest.length, 0);
	strictEqual(sut.southeast.length, 0);
	strictEqual(sut.southwest.length, 1);

});


module("追加した Location の削除");
QUnit.testStart(function() {
	var center = new MockLocation(35.7100327, 139.81071550000001); // 中心点となる座標
	sut = new LocationSort(center);
});

test("追加した Location を削除する", function() {
	sut.add(new MockPosition(35.71051115238239, 139.81199026107788));
	sut.add(new MockPosition(35.711064334670354, 139.80910420417786));
	sut.add(new MockPosition(35.709221830730314, 139.81190979480743));
	sut.add(new MockPosition(35.708864650097084, 139.80906665325165));

	// Exercise
	var actual = sut.clear();

	// Verify
	strictEqual(sut.northeast.length, 0);
	strictEqual(sut.northwest.length, 0);
	strictEqual(sut.southeast.length, 0);
	strictEqual(sut.southwest.length, 0);
});
