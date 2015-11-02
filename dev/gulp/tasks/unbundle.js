var gulp = require('gulp');
var paths = require('../paths');
var runSequence = require('run-sequence');
var options = require('options');

/**
 *
 */
gulp.task('unbundle', function (callback) {

  options.isBundle = false;

  runSequence(
    'clean-sfx',
    ['build-index'],
    callback
  );
});
