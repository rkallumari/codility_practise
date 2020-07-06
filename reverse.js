// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (S.length == 1) return 0;
  if (S.length == 0) return -1;
  if (S.length % 2 == 0) return -1;
  var mid = Math.floor(S.length / 2);
  var stringLeft = S.substring(0, mid);
  var stringRight = S.substring(mid + 1, S.length)
    .split("")
    .reverse()
    .join("");
  if (stringLeft === stringRight) return mid;
  else return -1;
  //   for (i = 0; i < stringLeft.length; i++) {
  //     if (stringLeft[i] != stringRight[stringLeft.length - 1 - i]) return -1;
  //   }
  //   return mid;
}
