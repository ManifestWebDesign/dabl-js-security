'use strict';

var LIVERELOAD_PORT = 35728;

module.exports = function (grunt) {

	// Load npm plugins to provide necessary tasks.
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		// Make sure code styles are up to par and there are no obvious mistakes
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish'),
				ignores: [
					'Gruntfile.js'
				]
			},
			all: {
				src: [
					'Gruntfile.js',
					'src/**/*.js'
				]
			}
		},
		clean: {
			all: ['dist/*', 'dist/**/*']
		},
		concat: {
			options: {
				separator: ';'
			},
			depsJs: {
				files: {
					'dist/dabl-js.security.js': [
						'bower_components/jsSHA/src/sha.js',
						'src/main.js',
						'src/services/*.js'
					]
				}
			}
		},
		uglify: {
			depsJs: {
				files: {
					'dist/dabl-js.security.min.js': 'dist/dabl-js.security.js'
				}
			}
		}
	});

	// Default task to be run.
	grunt.registerTask('build', [
		'clean',
		'concat',
		'uglify'
	]);

	grunt.registerTask('hint', [
		'newer:jshint'
	]);
};