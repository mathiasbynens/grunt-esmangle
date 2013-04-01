var grunt = require('grunt');

/*
	======== A Handy Little Nodeunit Reference ========
	https://github.com/caolan/nodeunit

	Test methods:
		test.expect(numAssertions)
		test.done()
	Test assertions:
		test.ok(value, [message])
		test.equal(actual, expected, [message])
		test.notEqual(actual, expected, [message])
		test.deepEqual(actual, expected, [message])
		test.notDeepEqual(actual, expected, [message])
		test.strictEqual(actual, expected, [message])
		test.notStrictEqual(actual, expected, [message])
		test.throws(block, [error], [message])
		test.doesNotThrow(block, [error], [message])
		test.ifError(value)
*/

var compare = function(inputFile, expectedOutputFile, description, test) {
	var actual = grunt.file.read(inputFile);
	var expected = grunt.file.read(expectedOutputFile);
	test.equal(actual, expected, description);
	test.done();
};

exports.esmangle = {
	'simple': function(test) {
		compare(
			'tmp/simple.js',
			'tests/expected/simple.js',
			'Simple example with default settings',
			test
		);
	},
	'simple-with-comments': function(test) {
		compare(
			'tmp/simple-with-comments.js',
			'tests/expected/simple-with-comments.js',
			'Simple example with comments enabled',
			test
		);
	},
	'advanced': function(test) {
		compare(
			'tmp/advanced.js',
			'tests/expected/advanced.js',
			'Advanced example with default settings',
			test
		);
	},
	'advanced-with-banner': function(test) {
		compare(
			'tmp/advanced-with-banner.js',
			'tests/expected/advanced-with-banner.js',
			'Advanced example with banner',
			test
		);
	}
};
