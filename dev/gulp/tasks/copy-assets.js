var gulp = require('gulp');
var changed = require('gulp-changed');
var del = require('del');
var paths = require('../paths');

/**
 * Copy vendor assets @see gulp/options.js assets parameter
 */
gulp.task('copy-assets', function () {
  return gulp.src(paths.assets)
    .pipe(gulp.dest(paths.output.root));
});
