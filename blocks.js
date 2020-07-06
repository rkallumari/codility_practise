// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(H) {
  // write your code in JavaScript (Node.js 8.9.4)
  let result = 0;
  for (let i = 1; i < H.length; i++) {
    result += Math.max(0, H[i - 1] - H[i]);
  }
  return result - 1;
}
