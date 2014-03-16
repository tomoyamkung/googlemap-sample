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

test("MockLocation の生成", function() {
	var mock = new MockLocation();
	ok(mock != 'undefined', "mock is not undefined.");
	ok(mock.k === 1, "latitude is 1.");
	ok(mock.A === 10, "longitude is 10.");

	mock = new MockLocation(2, 20);
	ok(mock != 'undefined', "mock is not undefined.");
	ok(mock.k === 2, "latitude is 2.");
	ok(mock.A === 20, "longitude is 20.");
});

test("InfoWindowStock の生成", function() {
	var stock = new InfoWindowStock();
	ok(stock != 'undefined', "インスタンスは生成される");
});

test("ストックされていない状態で get する", function() {
	var location = new MockLocation();
	var stock = new InfoWindowStock();
	var x = stock.get(location);
	ok(x == undefined, "undefined.");
});
