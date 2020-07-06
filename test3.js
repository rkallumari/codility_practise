// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  var result;
  var current;
  var currentString;
  var j = 0;
  if (S.length == K) return 0;
  if (K == 0) return calculateLength(S);
  for (var i = 0; i < S.length - K; i++) {
    if (i != 0) {
      currentString = S.substring(0, i).concat(S.substring(i + K));
    } else {
      currentString = S.substring(i + K);
    }
    current = calculateLength(currentString);
    if (result == undefined) result = current;
    else if (current < result) result = current;
  }
  return result;
}

function calculateLength(S) {
  var char = S[0];
  var count = 1;
  var newString = "";
  for (var i = 1; i < S.length; i++) {
    if (char == S[i]) count++;
    else {
      if (count > 1) {
        newString = newString.concat(count).concat(char);
        count = 1;
      } else {
        newString = newString.concat(char);
      }
      char = S[i];
    }
  }
  if (count > 1) newString = newString.concat(count).concat(char);
  else newString = newString.concat(char);
  return newString.length;
}
