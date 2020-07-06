// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  var incre = 0;
  var sum = 0;
  console.log(A);
  for (var i = 0; i < A.length; i++) {
    if (A[i] == 0) incre += 1;
    if (A[i] == 1) sum += incre;
    if (sum > Math.pow(10, 9)) return -1;
  }
  return sum;
}
