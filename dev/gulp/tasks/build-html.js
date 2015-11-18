var $ = require('gulp-load-plugins')();
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");
var paths = require('../paths');
var options = require('../options');

/**
 * Build html templates cache module
 */
gulp.task('build-html', function() {
  return gulp.src(paths.html)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe($.minifyHtml(options.minifyHtml))
    .pipe($.angularTemplatecache({
      moduleSystem: 'ES6',
      standalone: true
    }))
    .pipe(gulp.dest(paths.output.html));
});
