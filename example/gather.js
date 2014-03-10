
var co = require('..');

function get(i) {
  return function (done) {
    setTimeout(function () {
      if (Math.random() > 0.5) {
        return done(new Error('error'));
      }
      done(null, i);
    }, 10);
  }
}

co(function *() {
  var thunks = [];
  for (var i = 0; i < 10; i++) {
    thunks.push(get(i));
  }
  var res = yield co.gather(thunks);
  console.log(res);
})();
