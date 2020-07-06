// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length == 1) return A[0];
  var max_here = 0;
  var max_so_far;
  for (var i = 0; i < A.length; i++) {
    max_here = Math.max(A[i], max_here + A[i]);
    if (max_so_far != undefined) max_so_far = Math.max(max_so_far, max_here);
    else max_so_far = max_here;
  }
  return max_so_far;
}
