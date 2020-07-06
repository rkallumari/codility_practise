// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  var prefixSum = [];
  var sum = 0;
  var min;
  var minIndex;
  for (var i = 0; i < A.length; i++) {
    sum += A[i];
    prefixSum.push(sum);
  }
  for (var i = 0; i < prefixSum.length; i++) {
    for (var j = i + 1; j < prefixSum.length; j++) {
      var avg;
      if (i == 0) {
        avg = prefixSum[j] / (j - i + 1);
      } else {
        avg = (prefixSum[j] - prefixSum[i - 1]) / (j - i + 1);
      }
      if (min != undefined && avg < min) {
        min = avg;
        minIndex = i;
      } else if (min == undefined) {
        min = avg;
        minIndex = i;
      }
    }
  }
  return minIndex;
}
