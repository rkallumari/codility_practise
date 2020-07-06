// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A = A.sort();
  if (A[0] < 0 && A[1] < 0 && A[A.length - 1] > 0) {
    if (
      A[0] * A[1] * A[A.length - 1] >
      A[A.length - 1] * A[A.length - 2] * A[A.length - 3]
    ) {
      return A[0] * A[1] * A[A.length - 1];
    }
  }
  return A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
}
