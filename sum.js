function solution(A) {
  var sums = [];
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length == 2) {
    return Math.abs(A[0] - A[1]);
  } else {
    for (var i = 1; i < A.length; i++) {
      var left = A.slice(0, i);
      var right = A.slice(i, A.length);
      sums.push(
        Math.abs(left.reduce((a, b) => a + b) - right.reduce((a, b) => a + b))
      );
    }
    return Math.min(...sums);
  }
}
