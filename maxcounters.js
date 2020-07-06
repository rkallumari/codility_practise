// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  var solution = [];
  var max = 0;
  for (var i = 0; i < N; i++) {
    solution[i] = 0;
  }
  for (var i = 0; i < A.length; i++) {
    if (A[i] > N) {
      for (var j = 0; j < N; j++) {
        solution[j] = max;
      }
    } else {
      solution[A[i] - 1] += 1;
      if (solution[A[i] - 1] > max) max = solution[A[i] - 1];
    }
  }
  return solution;
}
