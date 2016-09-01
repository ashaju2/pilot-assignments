var console = require('./lib/consolelog.js');

module.exports = function chessboard() {
  var size = 8;
for (var i = 1; i <=size; i++){
  var n = '';
  for (var j = 1; j <= size; j++) {
    if (i%2 !== j%2){
        n = n + ' ';
      }
    else if (i%2 === j%2){
        n = n + '#';
      }
    else if (j%2) {
        n = n + '#';
      }
    else {
        n = n + ' ';
      }
   }
      console.log(n)

 }
}
