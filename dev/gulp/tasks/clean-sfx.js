var gulp = require('gulp');
var del = require('del');
var paths = require('../paths');

/**
 * Deletes all files in the output path
 */
gulp.task('clean-sfx', function (callback) {
  del(paths.output.root + 'scripts/app-bundle.js', {}, callback);
});
