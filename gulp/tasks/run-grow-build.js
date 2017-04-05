var exec = require('child_process').exec;


module.exports = function(gulp) {
  return function(callback) {
    exec('grow build', function(err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      callback(err);
    });
  }
};
