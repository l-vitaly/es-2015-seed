var $ = require('gulp-load-plugins')();
var gulp = require('gulp');
var fs = require('fs');
var paths = require('../paths');
var options = require('options');

gulp.task('build-index', function () {
  return gulp.src(paths.index)
    .pipe($.preprocess({
      context: {
        BASE_HREF: paths.baseHref,
        IS_BUNDLE: options.isBundle
      }
    }))
    .pipe(gulp.dest(paths.output.index));
});
