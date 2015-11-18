var $ = require('gulp-load-plugins')();
var gulp = require('gulp');
var browserSync = require('browser-sync');
var options = require('../options');
var paths = require('../paths');

/**
 * Serve the site with live reload
 **/
gulp.task('serve', ['build'], function() {

  browserSync({
    proxy: {
      target: options.browserSync.localUrl
    }
  });

  $.watch(paths.index, function() {
    gulp.start('build-index');
  });

  $.watch(paths.html, function() {
    gulp.start('build-html');
  });

  $.watch(paths.scripts, function() {
    gulp.start('build-js');
  });

  $.watch(paths.sass, function() {
    gulp.start('build-sass');
  });

  $.watch(paths.fonts, function() {
    gulp.start('copy-fonts');
  });

  $.watch(paths.images, function() {
    gulp.start('copy-images');
  });
});
