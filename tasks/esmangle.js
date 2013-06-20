var esprima = require('esprima');
var esmangle = require('esmangle');
var escodegen = require('escodegen');

module.exports = function(grunt) {

	var minMax = require('grunt-lib-contrib').init(grunt).minMaxInfo;

	grunt.registerMultiTask('esmangle', 'Mangle or minify JavaScript files with Esmangle.', function() {
		// Merge task-specific and/or target-specific options with these defaults:
		var options = this.options({
			'banner': '',
			'report': 'gzip',
			// https://github.com/Constellation/escodegen/blob/master/escodegen.js:
			// → `getDefaultOptions()`
			// Some of these settings are documented here:
			// https://github.com/Constellation/escodegen/wiki/API
			'format': {
				'indent': {
					'style': '',
					'base': 0,
					'adjustMultilineComment': false
				},
				'json': false,
				'renumber': true,
				'hexadecimal': true,
				'quotes': 'single',
				'escapeless': false,
				'compact': true,
				'parentheses': false,
				'semicolons': true,
				'safeConcatenation': false
			},
			'parse': null,
			'comment': false,
			'sourceMap': undefined,
			'sourceMapRoot': undefined,
			'sourceMapWithCode': false
		});

		var banner = grunt.template.process(options.banner);

		// Iterate over all specified file groups.
		this.files.forEach(function(file) {
			// Concat specified files.
			var src = file.src.filter(function(filePath) {
				// Warn on and remove invalid source files.
				if (!grunt.file.exists(filePath)) {
					grunt.log.warn('Source file `' + filePath + '` not found.');
					return false;
				} else {
					return true;
				}
			}).map(function(filePath) {
				// Read file source.
				return grunt.file.read(filePath);
			}).join(';');

			var ast = esprima.parse(src, options.comment ? {
				'comment': true,
				'range': true,
				'tokens': true
			} : {});
			var optimizedAST = esmangle.optimize(ast, null, { 'destructive': true });
			var mangledAST = esmangle.mangle(optimizedAST, { 'destructive': true });
			if (options.comment) {
				mangledAST = escodegen.attachComments(
					mangledAST,
					mangledAST.comments,
					mangledAST.tokens
				);
			}
			var result = banner + escodegen.generate(mangledAST, options);

			if (options.report) {
				minMax(result, src, options.report);
			}

			// Write the destination file
			grunt.file.write(file.dest, result);

			// Print a success message
			grunt.log.writeln('File `' + file.dest + '` created.');
		});
	});

};
