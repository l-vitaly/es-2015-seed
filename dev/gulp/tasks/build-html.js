var $ = require('gulp-load-plugins')();
var gulp = require('gulp');
var paths = require('../paths');
var options = require('../options');

gulp.task('build-html', function () {
  return gulp.src(paths.html)
    .pipe($.changed(paths.html[0], {extension: '.html'}))
    .pipe($.minifyHtml(options.minifyHtml))
    .pipe(gulp.dest(paths.output.html));
});
