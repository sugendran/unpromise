module.exports = function(promise, callback) {
  // Yes I know I could just stick the callback
  // as the arg here but I want to be explicit!
  promise.error(function(err) {
    callback(err);
  }).success(function(val) {
    callback(null, val);
  });
};