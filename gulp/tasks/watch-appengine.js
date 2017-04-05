var PATHS = require('../paths');

module.exports = function(gulp) {
  return function() {
    gulp.watch([
      PATHS.CSS_SOURCES,
      PATHS.JS_SOURCES
    ], ['run-grow-build']);
  };
};
