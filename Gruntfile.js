module.exports = function(grunt) {

	grunt.initConfig({

		'clean': {
			'tests': ['tmp'],
		},

		// Configuration to be run and tested
		'esmangle': {
			'test-1': {
				'options': {},
				'files': {
					'tmp/simple.js': ['tests/fixtures/simple.js']
				},
			},
			'test-2-with-comments': {
				'options': {
					'comment': true
				},
				'files': {
					'tmp/simple-with-comments.js': ['tests/fixtures/simple.js']
				},
			},
			'test-3': {
				'options': {},
				'files': {
					'tmp/advanced.js': ['tests/fixtures/advanced.js']
				},
			}
		},

		// Unit tests
		'nodeunit': {
			'tests': ['tests/tests.js']
		}

	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.registerTask('test', ['clean', 'esmangle', 'nodeunit']);
	grunt.registerTask('default', ['test']);

};
