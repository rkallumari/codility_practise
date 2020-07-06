// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(T) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (T == null) return -1;
  return maxHeight(T, 0);
}

function maxHeight(T, heightSoFar) {
  if (T.r == null && T.l == null) {
    return heightSoFar;
  }
  if (T.r != null && T.l != null) {
    return Math.max(
      maxHeight(T.r, heightSoFar + 1),
      maxHeight(T.l, heightSoFar + 1)
    );
  } else if (T.r != null) {
    return maxHeight(T.r, heightSoFar + 1);
  } else {
    return maxHeight(T.l, heightSoFar + 1);
  }
}
