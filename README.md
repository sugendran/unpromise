unpromise
=========

Sometimes you want a promise to work with a callback.

install: `npm install unpromise`

example: 

``` js
var unpromise = require('unpromise');

function createTask(str, callback) {
  // task.create returns an object that
  // has .success and .error methods
  var somePromise = task.create();
  unpromise(somePromise, callback);
}
```

