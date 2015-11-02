var gulp = require('gulp');
var changed = require('gulp-changed');
var del = require('del');
var paths = require('../paths');

/**
 * Copy images to build folder
 */
gulp.task('copy-images', function () {
  return gulp.src(paths.images)
    .pipe(changed(paths.images))
    .pipe(gulp.dest(paths.output.images));
});

gulp.task('clean-images', function (callback) {
  del(paths.output.images, {}, callback);
});
