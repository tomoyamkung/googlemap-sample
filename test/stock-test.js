var MockLocation = function(latitude, longitude) {
	this.k = 1; // 緯度
	if(latitude) {
		this.k = latitude;
	}

	this.A = 10; // 経度
	if(longitude) {
		this.A = longitude;
	}
};

module("MockLocation の生成に関するテスト");
test("MockLocation の生成", function() {
	var mock = new MockLocation();
	notStrictEqual(mock, undefined, "mock is not undefined.");
	strictEqual(mock.k, 1, "latitude is 1.");
	strictEqual(mock.A, 10, "longitude is 10.");

	mock = new MockLocation(2, 20);
	notStrictEqual(mock, undefined, "mock is not undefined.");
	strictEqual(mock.k, 2, "latitude is 2.");
	strictEqual(mock.A, 20, "longitude is 20.");
});


var sut;
module("InfoWindowStock の生成に関するテスト")
QUnit.testStart(function() {
	sut = new InfoWindowStock();
})
test("InfoWindowsut の生成", function() {
	notStrictEqual(sut, undefined, "インスタンスは生成される");
});


module("InfoWindowStock に関するテスト")
QUnit.testStart(function() {
	sut = new InfoWindowStock();
})
test("ストックされていない状態で get する", function() {
	var expected = sut.get(new MockLocation());
	var actual = undefined;
	strictEqual(expected, actual, "ストックしていないので undefined が返ってくる");
});

test("ストックしたものを取り出す", function() {
	var location = new MockLocation();
	sut.put(location, location);

	var actual = sut.get(location);
	propEqual(actual, location);
});

test("ストックしたものを get してもストックから削除されない", function() {
	var location = new MockLocation();
	sut.put(location, location);

	var actual = sut.get(location); // 1回目の取り出し
	actual = sut.get(location); // 2回目の取り出し
	notStrictEqual(actual, undefined);
});