# grunt-drupalcs

> Grunt plugin for running Drupal based PHP Code Sniffer.

This is heavily based on the normal `grunt-phpcs` and is more or less a placeholder until php (via robo?) has better ways to run tasks.

_This plugin is developed for Grunt `0.4.0` and is not tested for backward compatibility with Grunt `0.3.x`._

##Getting Started
1. Install this grunt plugin with the following command:

	```shell
	npm install https://github.com/thinktandem/grunt-drupalcs/tarball/master --save-dev
	```

3. Add this to your project's `Gruntfile.js` gruntfile:

	```js
	grunt.loadNpmTasks('grunt-drupalcs');
	```

## Drupal PHP Code Sniffer task
_Run this task with the `grunt drupalcs` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

###Usage Example

```js
drupalcs: {
	application: {
		src: ['application/classes/*.php', 'application/lib/**/*.php']
	},
	options: {
		bin: 'vendor/bin/phpcs',
		standard: 'Zend'
	}
}
```

### Custom callback

Do whatever you want with the output.

```js
function log(err, stdout, stderr, cb) {
	console.log(stdout);
	cb();
}
grunt.initConfig({
	phpcs: {
		application: {
			src: ['application/classes/*.php', 'application/lib/**/*.php']
		},
		options: {
			callback: log
		}
	}
});
```

###Options
####bin
Type: `String`  Default: `'node_modules/grunt-drupalcs/.bin/phpcs'`

####maxBuffer
Type: `Number` Default: `200*1024`

Set the buffer size.

####verbose
Type: `Boolean` Default: `false`

Output more verbose information.

####showSniffCodes
Type: `Boolean` Default: `false`

Show sniff codes in all reports.

####severity
Type: `Integer` Default: `false`

The minimum severity required to display an error or warning.

####warningSeverity
Type: `Integer` Default: `false`

The minimum severity required to display a warning.

####errorSeverity
Type: `Integer` Default: `false`

The minimum severity required to display an error.

####standard
Type: `String`  Default: `drupal`

Define the standard to use.

####report
Type: `String` Default: `false`

Report types and options

####reportFile
Type: `String` Default: `false`

Log report to the file.

####tabWidth
Type: `Integer` Default: `false`

Automatically convert tabs to the specified number of spaces when sniffing.
