// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  var binary = "";
  if (N == 0 || N == 1) {
    return 0;
  }
  while (N > 1) {
    binary += "".concat(N % 2);
    N = Math.trunc(N / 2);
  }
  binary = "1".concat(binary.split("").reverse().join(""));
  var gaps = [];
  var length = 0;
  if (binary.indexOf("1") == binary.lastIndexOf("1")) {
    return 0;
  } else {
    for (var i = 0; i < binary.length; i++) {
      if (binary[i] == 1) {
        gaps.push(length);
        length = 0;
      } else {
        length += 1;
      }
    }
  }
  return Math.max(...gaps);
}
