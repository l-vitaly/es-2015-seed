var gulp = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', function (callback) {

  runSequence(
    'clean',
    'lint',
    ['build-js', 'build-html', 'build-sass', 'build-index', 'copy-fonts', 'copy-images'],
    callback
  );
});
