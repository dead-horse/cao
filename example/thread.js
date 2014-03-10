
var get = require('co-request');
var co = require('..');

co(function *() {

  var times = 10;

  while (times--) {
    yield co.thread(function *() {
      var res = yield get('http://google.com');
      console.log(res.statusCode);
    }, 20);
  }

})();
