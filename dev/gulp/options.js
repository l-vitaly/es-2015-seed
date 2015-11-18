var $ = require('gulp-load-plugins')();
var argv = $.util.env;
var isDebug = !!argv.debug;
var cacheBust = Math.round(new Date() / 1000);
var defaultGulpServerUrl = 'http://docker.dev:1095';

module.exports = {
  cacheBust: cacheBust,
  isDebug: isDebug,
  isBundle: false,
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: true
  },
  sass: {
  },
  js: {
    modules: 'system',
    moduleIds: false,
    comments: false,
    compact: true,
    stage:2
  },
  browserSync: {
    localUrl: process.env.GULP_SERVE_URL ? process.env.GULP_SERVE_URL : defaultGulpServerUrl
  },
  minifyHtml: {
    empty: true,
    conditionals: true,
    quotes: true,
    spare: true
  }
};
