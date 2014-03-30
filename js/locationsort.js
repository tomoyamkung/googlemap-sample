var LocationSort = (function() {
	var _center;
	return {
		judge: function(center, location) {
			var k;
			var A;
			if(location.position === undefined) {
				k = location.k;
				A = location.A;
			} else {
				k = location.position.k;
				A = location.position.A;
			}

			if(center) {
				_center = center;
			}

			if(_center.k < k && _center.A < A) {
				return "ne";
			} else if(_center.k < k && A < _center.A) {
				return "nw";
			} else if(k < _center.k && _center.A < A) {
				return "se";
			} else if(k < _center.k && A < _center.A) {
				return "sw";
			} else {
				return "";
			}
		}
	};
})();
