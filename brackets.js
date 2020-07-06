// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  var stack = [];
  if (S.length) {
    for (var i = 0; i < S.length; i++) {
      stack = addToStack(stack, S[i]);
    }
  } else {
    return 1;
  }
  console.log(stack);
  if (stack.length) return 0;
  else return 1;
}

function addToStack(stack, element) {
  if (stack.length) {
    switch (stack[stack.length - 1]) {
      case "{":
        if (element == "}") stack.pop();
        else stack.push(element);
        break;
      case "[":
        if (element == "]") stack.pop();
        else stack.push(element);
        break;
      case "(":
        if (element == ")") stack.pop();
        else stack.push(element);
        break;
    }
  } else {
    stack.push(element);
  }
  return stack;
}

function popFromStack() {
  stack;
}
