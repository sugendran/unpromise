var unpromise = require("./index");
var assert = require('assert');

// SIMPLE IMPLEMENTATION
function Promise() {
  this.onSuccess = function() { };
  this.onFailure = function() { };
}
Promise.prototype.success = function(cb) {
  this.onSuccess = cb;
  return this;
};
Promise.prototype.error = function(cb) {
  this.onFailure = cb;
  return this;
};

var errValue = 1;
var successValue = 2;
var callCount = 0;
var callback = function(err, val) {
  if(err) {
    assert.equal(err, errValue, 'Error is correct value');
    assert.equal(val, undefined, 'val is undefined when there is an error');
  }
  if(val) {
    assert.equal(err, null, 'Error is null when there is a value');
    assert.equal(val, successValue, 'Called with correct val');
  }
  callCount++;
};

var promise = new Promise();
unpromise(promise, callback);
promise.onSuccess(successValue);
assert.equal(callCount, 1, 'should be only called once');
promise.onFailure(errValue);
assert.equal(callCount, 2, 'should be called twice');

console.log('All tests pass');