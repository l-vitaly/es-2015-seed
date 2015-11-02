var $ = require('gulp-load-plugins')();
var gulp = require('gulp');
var Builder = require('systemjs-builder');
var colors = $.util.colors;
var log = $.util.log;
var paths = require('../paths');
var options = require('../options')

/**
 * Compile bundle
 */
gulp.task('build-sfx', function (callback) {

  var builder = new Builder();

  builder.loadConfig('./config.js')
    .then(function () {
        return builder.buildSFX('scripts/bootstrap', paths.output.root + 'scripts/app-bundle.js', {
          sourceMaps: options.isDebug,
          lowResSourceMaps: options.isDebug,
          minify: true
        }).then(function () {
          callback();
        }).catch(function (err) {
          log(colors.red(err));
          callback();
        });
      }
    );
});
