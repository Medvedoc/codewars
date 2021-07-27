// Solutions in JavaScript

// 5kyu - Sum of (Two) Squares

// https://www.codewars.com/kata/52217066578afbcc260002d0

function allSquaredPairs(num) {
  let array = []
  for (let i = 0; i <= Math.sqrt(num/2); i++) if (Math.sqrt(num-i*i) % 1 == 0) array.push([i, Math.sqrt(num-i*i)])
  return array
}