var gulp = require('gulp');
var runSequence = require('run-sequence');
var options = require('../options');

/**
 * Compile bundle
 */
gulp.task('bundle', function (callback) {

  options.isBundle = true;

  runSequence(
    'clean',
    'lint',
    ['copy-images', 'copy-fonts'],
    ['build-html', 'build-index', 'build-static', 'build-sass'],
    callback
  );
});
