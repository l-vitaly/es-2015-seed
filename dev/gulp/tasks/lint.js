var gulp = require('gulp');
var paths = require('../paths');
var eslint = require('gulp-eslint');

/**
 * Runs eslint on all .js files
 */
gulp.task('lint', function() {
  return gulp.src(paths.scripts)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});
