var $ = require('gulp-load-plugins')();
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");
var assign = Object.assign || require('object.assign');
var paths = require('../paths');
var options = require('../options');

gulp.task('build-js', function () {
  return gulp.src(paths.scripts)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe($.changed(paths.scripts, {extension: '.js'}))
    .pipe($.sourcemaps.init({loadMaps: true}))
    .pipe($.babel(assign({}, options.js, {modules:'system'})))
    .pipe($.sourcemaps.write({includeContent: true}))
    .pipe(gulp.dest(paths.output.scripts));
});
