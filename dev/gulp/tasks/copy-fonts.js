var gulp = require('gulp');
var changed = require('gulp-changed');
var del = require('del');
var paths = require('../paths');

/**
 * Copy fonts to build folder
 */
gulp.task('copy-fonts', function () {
  return gulp.src(paths.fonts)
    .pipe(changed(paths.fonts))
    .pipe(gulp.dest(paths.output.fonts));
});

gulp.task('clean-fonts', function (callback) {
  del(paths.output.fonts, {}, callback);
});
