
//Basic usage: std.toCamelCase()
std = (function () {
	var pub = {};
	pub.toCamelCase = function () {
		var sentenceCase = "WOW",
			out = "";
	    sentenceCase.split(" ").forEach(function (el, idx) {
	        var add = el.toLowerCase();
	        out += (idx === 0 ? add : add[0].toUpperCase() + add.slice(1));
	    });
	    return out;
	};
    return pub;
})();
