var gulp = require('gulp');
var runSequence = require('run-sequence');
var options = require('../options');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', function (callback) {
  var taskJsBuild = options.env === 'production' ? 'build-static' : 'build-js';

  runSequence(
    'clean',
    'lint',
    ['copy-images', 'copy-fonts', 'copy-assets'],
    ['build-html', 'build-index', 'build-sass'],
    taskJsBuild,
    callback
  );
});
