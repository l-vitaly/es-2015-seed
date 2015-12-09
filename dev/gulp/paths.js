var appRoot = 'app/';
var outputRoot = 'dist/';

module.exports = {
  root: appRoot,
  scripts: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  sass: appRoot + 'sass/**/*.scss',
  index: appRoot + 'index.ejs',
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
