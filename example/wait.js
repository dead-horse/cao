
var co = require('..');

co(function* (){
  console.time('wait');
  yield co.wait(1000);
  console.timeEnd('wait');
})();
