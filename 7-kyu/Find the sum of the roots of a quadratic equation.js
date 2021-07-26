// Solutions in JavaScript

// 7kyu - Find the sum of the roots of a quadratic equation

// https://www.codewars.com/kata/57d448c6ba30875437000138

function roots(a,b,c){
  let result = b*b - 4 * a * c;
  if (result < 0) return null;
  return +(-b/a).toFixed(2);
}