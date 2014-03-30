var LocationSort = (function() {
	return {
		judge: function(center, location) {
			if(center.k < location.position.k && center.A < location.position.A) {
				return "ne";
			} else if(center.k < location.position.k && location.position.A < center.A) {
				return "nw";
			} else if(location.position.k < center.k && center.A < location.position.A) {
				return "se";
			} else if(location.position.k < center.k && location.position.A < center.A) {
				return "sw";
			} else {
				return "";
			}
		}
	};
})();
