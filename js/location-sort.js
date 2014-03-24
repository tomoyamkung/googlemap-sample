var LocationSort = function(center) {
	this.center = center;
	this.northeast = []; // 中心点から北東の位置にある Location を格納する配列
	this.northwest = []; // 中心点から北西の位置にある Location を格納する配列
	this.southeast = []; // 中心点から南東の位置にある Location を格納する配列
	this.southwest = []; // 中心点から南西の位置にある Location を格納する配列
};
LocationSort.prototype = {
	hasNortheast: function() {
		return 0 < this.northeast.length;
	},
	hasNorthwest: function() {
		return 0 < this.northwest.length;
	},
	hasSoutheast: function() {
		return 0 < this.southeast.length;
	},
	hasSouthwest: function() {
		return 0 < this.southwest.length;
	},

	addNortheast: function(location) {
		this.northeast.push(location);
	},
	getNortheast: function() {
		return this.northeast;
	}

};
