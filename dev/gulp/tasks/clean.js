var gulp = require('gulp');
var del = require('del');
var paths = require('../paths');

/**
 * Deletes all files in the output path
 */
gulp.task('clean', function (callback) {
  del(paths.output.root, {}, callback);
});
