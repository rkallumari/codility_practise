// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  var indexes = [];
  for (var i = 0; i < A.length; i++) {
    indexes[A[i]] = 1;
  }
  for (var i = 1; i <= A.length; i++) {
    if (indexes[i] == undefined) return 0;
  }
  return 1;
}
