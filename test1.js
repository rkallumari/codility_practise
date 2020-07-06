// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, X, Y) {
  // write your code in JavaScript (Node.js 8.9.4)
  var index = {};
  var count = 0;
  var maxRadius;
  var distances = [];
  var distance = 0;
  for (var i = 0; i < S.length; i++) {
    distance = Math.sqrt(Math.pow(X[i], 2) + Math.pow(Y[i], 2));
    distances.push(distance);
    if (maxRadius == undefined) maxRadius = distance;
    if (
      index[S[i]] != undefined &&
      index[S[i]] < distance &&
      maxRadius < distance
    ) {
      maxRadius = distance - 1;
    } else if (
      index[S[i]] != undefined &&
      index[S[i]] == distance &&
      maxRadius <= distance
    ) {
      maxRadius = distance - 1;
    } else if (index[S[i]] == undefined) {
      index[S[i]] = distance;
    }
  }
  for (var i = 0; i < distances.length; i++) {
    if (distances[i] <= maxRadius) count++;
  }
  return count;
}
