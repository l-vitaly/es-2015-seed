/**
 * List tasks
 **/

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('list', plugins.taskListing);
