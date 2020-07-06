// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
  // write your code in JavaScript (Node.js 8.9.4)
  var code = {
    A: 1,
    C: 2,
    G: 3,
    T: 4,
  };
  var gnem = [];
  var pair = [];
  var result = [];
  // for(var i=0; i<S.length; i++) {
  //     gnem.push(code[S[i]]);
  // }
  for (var i = 0; i < P.length; i++) {
    pair.push(S.substring(P[i], Q[i] + 1));
  }
  for (var i = 0; i < pair.length; i++) {
    var string = pair[i];
    var min = undefined;
    for (var j = 0; j < string.length; j++) {
      if (min != undefined && code[string[j]] < min) {
        min = code[string[j]];
      } else if (min == undefined) {
        min = code[string[j]];
      }
    }
    result.push(min);
  }
  return result;
}
