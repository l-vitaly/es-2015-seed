var $ = require('gulp-load-plugins')();
var gulp = require('gulp');
var del = require('del');
var paths = require('../paths');

/**
 * Copy images to build folder
 */
gulp.task('copy-images', function () {
  return gulp.src(paths.images)
    .pipe($.changed(paths.images))
    .pipe(gulp.dest(paths.output.images));
});

gulp.task('clean-images', function (callback) {
  del(paths.output.images, {}, callback);
});
