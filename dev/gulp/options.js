var $ = require('gulp-load-plugins')();
var argv = $.util.env;
var isDebug = !!argv.debug;

module.exports = {
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
    localUrl: process.env.GULP_SERVE_URL ? process.env.GULP_SERVE_URL : 'http://192.168.99.100:16500'
  },
  minifyHtml: {
    empty: true,
    conditionals: true,
    quotes: true,
    spare: true
  }
};
