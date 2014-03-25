
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

module("Location の追加と取得");
var sut;
QUnit.testStart(function() {
	var center = new MockLocation(35.7100327, 139.81071550000001); // 中心点となる座標
	sut = new LocationSort(center);
});

test("北東の位置に Location を格納するテスト", function() {
	var location = new MockLocation(35.71051115238239, 139.81199026107788);
	sut.add(location);
	
	// Verify
	strictEqual(sut.hasNortheast(), true);
	strictEqual(sut.hasNorthwest(), false);
	strictEqual(sut.hasSoutheast(), false);
	strictEqual(sut.hasSouthwest(), false);

	var actual = sut.getNortheast();
	strictEqual(actual.length, 1);
	propEqual(actual[0], location);
});

test("北西の位置に Location を格納するテスト", function() {
	var location = new MockLocation(35.711064334670354, 139.80910420417786);
	sut.add(location);
	
	// Verify
	strictEqual(sut.hasNortheast(), false);
	strictEqual(sut.hasNorthwest(), true);
	strictEqual(sut.hasSoutheast(), false);
	strictEqual(sut.hasSouthwest(), false);

	var actual = sut.getNorthwest();
	strictEqual(actual.length, 1);
	propEqual(actual[0], location);
});

test("南東の位置に Location を格納するテスト", function() {
	var location = new MockLocation(35.709221830730314, 139.81190979480743);
	sut.add(location);
	
	// Verify
	strictEqual(sut.hasNortheast(), false);
	strictEqual(sut.hasNorthwest(), false);
	strictEqual(sut.hasSoutheast(), true);
	strictEqual(sut.hasSouthwest(), false);

	var actual = sut.getSoutheast();
	strictEqual(actual.length, 1);
	propEqual(actual[0], location);
});

test("南西の位置に Location を格納するテスト", function() {
	var location = new MockLocation(35.708864650097084, 139.80906665325165);
	sut.add(location);
	
	// Verify
	strictEqual(sut.hasNortheast(), false);
	strictEqual(sut.hasNorthwest(), false);
	strictEqual(sut.hasSoutheast(), false);
	strictEqual(sut.hasSouthwest(), true);

	var actual = sut.getSouthwest();
	strictEqual(actual.length, 1);
	propEqual(actual[0], location);
});

test("全方位に追加した Location を取得する", function() {
	var ne = new MockLocation(35.71051115238239, 139.81199026107788);
	sut.add(ne);
	var nw = new MockLocation(35.711064334670354, 139.80910420417786);
	sut.add(nw);
	var se = new MockLocation(35.709221830730314, 139.81190979480743);
	sut.add(se);
	var sw = new MockLocation(35.708864650097084, 139.80906665325165);
	sut.add(sw);

	// Exercise
	var actual = sut.getAll();

	// Verify
	strictEqual(actual.length, 4, "格納されているオブジェクトの個数は4");
	propEqual(actual[0], ne, "1番目に格納したものは 北東 の場所");
	propEqual(actual[1], nw, "2番目に格納したものは 北西 の場所");
	propEqual(actual[2], se, "3番目に格納したものは 南東 の場所");
	propEqual(actual[3], sw, "4番目に格納したものは 南西 の場所");
});

