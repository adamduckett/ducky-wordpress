/**
 * Gulp Packages
 */

// General
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var util = require('gulp-util');
var notify = require('gulp-notify');

// Wordpress comment banner
var header = require('gulp-header');
var package = require('./package.json');

// Sass
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');


/**
 * Paths to project folders
 */

var paths = {
  styles: {
    input: 'sass/**/*.{scss,sass}',
    output: '.'
  }
};


/**
 * Template for banner to add to stylesheet header
 */

var banner =
  '/*\n' +
  'Theme Name: <%= package.name %>\n' +
  'Theme URI: <%= package.repository.url %>\n' +
  'Description: <%= package.description %>\n' +
  'Author: <%= package.author.name %> - <%= package.author.twitter %>\n' +
  'Author URI: <%= package.author.url %>\n' +
  'Version: <%= package.version %>\n' +
  'License: <%= package.license.type %>\n' +
<<<<<<< HEAD
=======
  'License URI: <%= package.license.url %>\n' +
>>>>>>> ec72546da8478784f38aa4fa146446499a9d7779
  '*/\n\n'
;


/**
 * Gulp Tasks
 */

// Process, lint, prefix & minify Sass files
gulp.task('sass', function() {
  return gulp.src(paths.styles.input)
  .pipe(plumber())
  .pipe(sass({
    outputStyle: 'expanded',
    sourceComments: true
  }))
  .pipe(prefix({
    browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
  }))
  .pipe(header(banner, { package : package }))
  .pipe(gulp.dest(paths.styles.output))
  .pipe(notify({ message: 'Styles task complete' }));
});


/**
 * Task Runners
 */

// Compile our Sass files
gulp.task('compile', [
  'sass'
]);

// Compile our Sass files before watching for further changes (our default task)
gulp.task('default', [
  'compile',
  'watch'
]);

// Watch for changes to our Sass files
gulp.task('watch', function() {
  gulp.watch(paths.styles.input, ['sass']);
});
