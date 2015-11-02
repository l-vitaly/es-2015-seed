var gulp = require('gulp');
var runSequence = require('run-sequence');
var options = require('options');
/**
 * Compile bundle
 */
gulp.task('bundle', function (callback) {

  options.isBundle = true;

  runSequence(
    'build',
    ['build-sfx'],
    callback
  );
});
