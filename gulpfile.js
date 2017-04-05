var gulp = require('gulp');
var getTask = require('./gulp/utils/get-task');

// Initialise gulp tasks.
gulp.task('browserify', getTask('browserify'));
gulp.task('browserify-min', getTask('browserify-min'));
gulp.task('clean', getTask('clean'));
gulp.task('sass', getTask('sass'));
gulp.task('watch', getTask('watch'));
gulp.task('watch-appengine', getTask('watch-appengine'));
gulp.task('run-grow-build', getTask('run-grow-build'));

// Main tasks
gulp.task('build', getTask('build'));
gulp.task('default', getTask('default'));
