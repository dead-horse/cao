
var co = require('..');

function get(i) {
  return function (done) {
    setTimeout(function () {
      done(null, i);
    }, 10);
  }
}

co(function *() {
  var thunks = [];
  for (var i = 0; i < 10; i++) {
    thunks.push(get(i));
  }
  var res = yield co.all(thunks);
  console.log(res);
})();
