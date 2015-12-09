var $ = require('gulp-load-plugins')();
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var paths = require('../paths');
var options = require('../options');

/**
 * Build index html file
 */
gulp.task('build-index', function() {
  return gulp.src(paths.index)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe($.ejs({
      ENV: options.env,
      CACHE_BUST: options.cacheBust,
      BASE_HREF: options.baseHref
    }))
    .pipe(gulp.dest(paths.output.index));
});
