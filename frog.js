function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  var test = [];
  var max;
  for (var i = 0; i < A.length; i++) {
    if (A[i] <= X && test[A[i]] == undefined) {
      test[A[i]] = i;
    }
  }
  if (test.length) {
    for (var i = 1; i <= X; i++) {
      if (test[i] == undefined) return -1;
      else if (max != undefined && test[i] > max) max = test[i];
      else if (max == undefined) max = test[i];
    }
    return max;
  } else {
    return -1;
  }
}

solution(3, [1, 3, 1, 3, 2, 1, 3]);
