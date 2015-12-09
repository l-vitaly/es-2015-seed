var $ = require('gulp-load-plugins')();
var gulp = require('gulp');
var Builder = require('systemjs-builder');
var colors = $.util.colors;
var log = $.util.log;
var paths = require('../paths');
var options = require('../options')

/**
 * Compile static bundle
 */
gulp.task('build-static', function(callback) {

  var builder = new Builder();

  builder.loadConfig('./config.js').then(function() {
      return builder.buildStatic('app/bootstrap', paths.output.root + '/app.js', {
        sourceMaps: false,
        lowResSourceMaps: false,
        minify: true
      }).then(function() {
        callback();
      }).catch(function(err) {
        log(colors.red(err));
        callback();
      });
    }
  );
});
