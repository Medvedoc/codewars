// Solutions in JavaScript

// 5kyu - Valid Parentheses

// https://www.codewars.com/kata/52774a314c2333f0a7000688

function validParentheses(parens) {
  let array = [];
  for (let i = 0; i < parens.length; i++) {
    if (parens.charAt(i) === '(') array.push(parens.charAt(i))
    else if (array.length === 0) return false
    else if (parens.charAt(i) === ')') {
      if (subfunction(array) === '(') array.pop()
      else return false
    }
  }
  return array.length === 0;
}
function subfunction(array) {return array[array.length - 1]}