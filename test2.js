// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  var count = 0;
  for (var i = 0; i < S.length; i++) {
    if (S[i] == "a") {
      count++;
    }
  }
  if (S.length == 3 && count == 2) return 0;
}
