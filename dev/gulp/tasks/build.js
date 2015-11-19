var gulp = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', function (callback) {
  runSequence(
    'clean',
    'lint',
    ['copy-fonts', 'copy-images', 'copy-assets'],
    ['build-html', 'build-sass', 'build-index'],
    'build-js',
    callback
  );
});
