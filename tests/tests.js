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

exports.esmangle = {
	'simple': function(test) {
		var actual = grunt.file.read('tmp/simple.js');
		var expected = grunt.file.read('tests/expected/simple.js');
		test.equal(actual, expected, 'Simple example with default settings');
		test.done();
	},
	'simple-with-comments': function(test) {
		var actual = grunt.file.read('tmp/simple-with-comments.js');
		var expected = grunt.file.read('tests/expected/simple-with-comments.js');
		test.equal(actual, expected, 'Simple example with comments enabled');
		test.done();
	},
	'advanced': function(test) {
		var actual = grunt.file.read('tmp/advanced.js');
		var expected = grunt.file.read('tests/expected/advanced.js');
		test.equal(actual, expected, 'Advanced example with default settings');
		test.done();
	},
};
