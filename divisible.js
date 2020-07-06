// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A == 0 && B == 0) return 1;
  else if (K == 1) return B - A;
  else {
    if (A % K == 0) return Math.trunc((B - A) / K) + 1;
    else return Math.trunc((B - A) / K);
  }
}
