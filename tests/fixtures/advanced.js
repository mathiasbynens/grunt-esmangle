!(function(root) {
	root.LOL = 'a\x0B\t\n\r\blolwat';

	function upperBound(array, func) {
		var diff, len, i, current;

		len = array.length;
		i = 0;

		while (len) {
			diff = len >>> 1;
			current = i + diff;
			if (func(array[current])) {
				len = diff;
			} else {
				i = current + 1;
				len -= diff + 1;
			}
		}
		return i;
	}

	var index = upperBound(
		[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37],
		function(a) {
			return a > 25;
		}
	);
}(this));
