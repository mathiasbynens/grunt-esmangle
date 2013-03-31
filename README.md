# grunt-esmangle

A Grunt plugin for mangling or minifying JavaScript files using [esmangle](http://constellation.github.com/esmangle/).

## Getting started

This plugin requires Grunt v0.4.0+.

If you haven’t used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you’re familiar with that process, you may install this plugin with this command:

```bash
npm install grunt-esmangle --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-esmangle');
```

## The `esmangle` task

### Overview

In your project’s Gruntfile, add a section named `esmangle` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
	'esmangle': {
		'options': {
			// Task-specific options go here
		},
		'your-target': {
			'options': {
				// Target-specific options go here
			},
			'files': {
				// Target-specific file lists go here
			}
		}
	}
});
```

### Options

The `options` property accepts all the available Escodegen options. See [the escodegen wiki](https://github.com/Constellation/escodegen/wiki/API) for an overview.

### Usage example

Here’s a practical example of grunt-esmangle:

```js
grunt.initConfig({
	'esmangle': {
		'options': {
			// Don’t preserve semicolons at the end of blocks and programs
			'semicolons': false
		},
		'minify-plugins': {
			'options': {
				// Always use double quotes as string literal delimiter
				'quotes': 'double'
			},
			'files': {
				'dist/all-plugins.min.js': ['js/plugins/*.js']
			}
		}
		'minify-custom-scripts': {
			'options': {
				// Preserve comments
				'comment': true
			},
			'files': {
				'dist/all-custom-scripts.min.js': ['js/custom-scripts/*.js']
			}
		}
	}
});
```

## Author

[Mathias Bynens](http://mathiasbynens.be/)
  [![twitter/mathias](http://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](http://twitter.com/mathias "Follow @mathias on Twitter")

## License

grunt-esmangle is dual licensed under the [MIT](http://mths.be/mit) and [GPL](http://mths.be/gpl) licenses.
