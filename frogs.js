// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  var fab = [0, 1];
  var jump = 0;
  i = 2;
  while (fab[fab.length - 1] <= A.length) {
    fab[i] = fab[i - 1] + fab[i - 2];
    if (fab[i] == A.length + 1) return 1;
    i++;
  }
  return getJumps(fab, A, jump);
}

function getJumps(fab, A, jump) {
  for (var i = fab.length - 1; i > 0; i--) {
    if (A.length + 1 == fab[i]) {
      jump += 1;
      return jump;
    }
    if (A[fab[i] - 1] == 1 && fab.indexOf()) {
      jump += 1;
      return getJumps(fab, A.slice(fab[i], A.length), jump);
    }
  }
  return -1;
}
