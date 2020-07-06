// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  B = A.slice();
  A.sort();
  var candidate = A[Math.floor(A.length / 2)];
  var count = 0;
  var index = -1;
  for (var i = 0; i < B.length; i++) {
    if (B[i] == candidate) {
      count++;
      index = i;
    }
  }
  if (count > B.length / 2) return index;
  else return -1;
}
