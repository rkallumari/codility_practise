// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)
  var result = A.length;
  var queue = [];
  var dir = [];
  var currentFlow;
  var intialFlow;
  var cont = false;
  for (var i = 0; i < B.length; i++) {
    if (B[i] == 1 && B[i + 1] == 0) {
      cont = true;
      break;
    }
  }
  if (cont) {
    for (var i = 0; i < A.length; i++) {
      if (i == 0) {
        queue.push(A[i]);
        currentFlow = B[i];
        dir.push(currentFlow);
      } else {
        if (currentFlow == 1 && B[i] == 0 && queue[queue.length - 1] > A[i]) {
          continue;
        } else if (
          currentFlow == 1 &&
          B[i] == 0 &&
          queue[queue.length - 1] < A[i]
        ) {
          queue[queue.length - 1] = A[i];
          dir[queue.length - 1] = 0;
          currentFlow = 0;
        } else {
          queue.push(A[i]);
          currentFlow = B[i];
          dir.push(B[i]);
        }
      }
    }
    return solution(queue, dir);
  } else {
    return result;
  }
}
