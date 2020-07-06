// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  var peaks = [];
  var previous_flag_placed;
  var max_global = 0;
  var count = 0;
  for (var i = 1; i < A.length - 1; i++) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1]) peaks.push(i);
  }
  if (peaks.length) {
    for (var i = peaks.length; i > 0; i--) {
      if (max_global < i) {
        var j = 1;
        previous_flag_placed = peaks[0];
        count = 1;
        while (j <= peaks.length) {
          if (peaks[j] - previous_flag_placed >= i) {
            count++;
            previous_flag_placed = peaks[j];
          }
          if (count == i) {
            break;
          }
          j++;
        }
        if (max_global < count) max_global = count;
      } else break;
    }
  }
  return max_global;
}
