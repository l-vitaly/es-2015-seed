var $ = require('gulp-load-plugins')();
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var paths = require('../paths');
var options = require('../options');

/**
 * Build index html file
 */
gulp.task('build-index', function () {
  return gulp.src(paths.index)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe($.preprocess({
      context: {
        CACHE_BUST: options.cacheBust,
        BASE_HREF: paths.baseHref,
        IS_BUNDLE: options.isBundle
      }
    }))
    .pipe($.rename('index.html'))
    .pipe(gulp.dest(paths.output.index));
});
