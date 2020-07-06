// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length == 1 || A.length == 0) {
    return 0;
  }
  var maxEndingHere = 0;
  var maxSoFar = 0;
  var minPrice = A[0];
  for (var i = 1; i < A.length; i++) {
    maxEndingHere = Math.max(0, A[i] - minPrice);
    minPrice = Math.min(minPrice, A[i]);
    maxSoFar = Math.max(maxEndingHere, maxSoFar);
  }
  return maxSoFar;
}
