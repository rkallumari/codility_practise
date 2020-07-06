// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  var min_perimeter;
  if (N == 1) {
    return 4;
  }
  var i = 1;
  while (i * i < N) {
    if (N % i == 0) {
      if (min_perimeter == undefined) {
        min_perimeter = 2 * (i + N / i);
      } else if (min_perimeter > 2 * (i + N / i))
        min_perimeter = 2 * (i + N / i);
    }
    i++;
  }
  return min_perimeter;
}
