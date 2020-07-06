// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  for (var i = 0; i < A.length - 1; i++) {
    for (var j = i + 1; j < A.length; j++) {
      if (A[i] > A[j]) {
        var p = A[i];
        A[i] = A[j];
        A[j] = p;
      }
    }
  }
  for (var i = 0; i < A.length; i++) {
    if (A[i] + 1 > 0 && A.indexOf(A[i] + 1) == -1) {
      return A[i] + 1;
    }
  }
  return 1;
}
