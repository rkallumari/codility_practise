// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  while (K > 0) {
    var last;
    for (var i = A.length - 1; i >= 0; i--) {
      if (i == A.length - 1) {
        last = A[i];
      }
      if (i == 0) {
        A[i] = last;
      } else {
        A[i] = A[i - 1];
      }
    }
    K--;
  }
  return A;
}
