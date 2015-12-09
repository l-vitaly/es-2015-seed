var $ = require('gulp-load-plugins')();
var argv = $.util.env;
var env = argv.env || 'development';
var browserSyncLocalUrl = argv.url || 'http://docker.dev:1095';
var cacheBust = Math.round(new Date() / 1000);
var baseHrefMap = {
  development: '/',
  staging: '/',
  production: '/'
};

module.exports = {
  baseHref: baseHrefMap[env] || '/',
  cacheBust: cacheBust,
  env: env,
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
    localUrl: browserSyncLocalUrl
  },
  minifyHtml: {
    empty: true,
    conditionals: true,
    quotes: true,
    spare: true
  }
};
