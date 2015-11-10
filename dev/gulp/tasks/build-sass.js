var $ = require('gulp-load-plugins')();
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");
var paths = require('../paths');
var options = require('../options');
/**
 * Build SASS
 */
gulp.task('build-sass', function () {

  return gulp.src(paths.sass)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe($.changed(paths.sass))
    .pipe($.if(options.isDebug, $.sourcemaps.init({loadMaps: true})))
    .pipe($.sass(options.sass))
    .pipe($.autoprefixer(options.autoprefixer))
    .pipe($.minifyCss())
    .pipe($.if(options.isDebug, $.sourcemaps.write({includeContent: true})))
    .pipe(gulp.dest(paths.output.sass));
});
