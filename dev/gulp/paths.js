var appRoot = 'app/';
var outputRoot = 'dist/';

module.exports = {
  baseHref: process.env.BASE_HREF ? process.env.BASE_HREF : '/',
  root: appRoot,
  scripts: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  sass: appRoot + 'sass/**/*.scss',
  index: appRoot + 'index.tpl',
  fonts: appRoot + 'fonts/**/*',
  images: appRoot + 'images/**/*',
  assets: [
  ],
  output: {
    root: outputRoot,
    index: '.',
    sass: outputRoot + 'css',
    scripts: outputRoot,
    html: appRoot,
    fonts: outputRoot + 'fonts',
    images: outputRoot + 'images'
  }
};
