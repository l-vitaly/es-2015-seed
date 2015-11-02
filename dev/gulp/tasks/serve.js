/**
 * Serve the site with live reload
 **/

var $ = require('gulp-load-plugins')();
var gulp = require('gulp');
var browserSync = require('browser-sync');
var options = require('../options');
var paths = require('../paths');

gulp.task('serve', ['build'], function () {

  browserSync({
    proxy: {
      target: options.browserSync.localUrl
    }
  });

  $.watch(paths.index, $.batch(function (event, callback) {
    gulp.start('build-index', callback);
  }));

  $.watch(paths.scripts, $.batch(function (event, callback) {
    gulp.start('build-js', callback);
  }));

  $.watch(paths.sass, $.batch(function (event, callback) {
    gulp.start('build-sass', callback);
  }));

  $.watch(paths.fonts, $.batch(function (event, callback) {
    gulp.start('clean-fonts', function () {
      gulp.start('copy-fonts', callback);
    });
  }));

  $.watch(paths.images, $.batch(function (event, callback) {
    gulp.start('clean-images', function () {
      gulp.start('copy-images', callback);
    });
  }));

});
