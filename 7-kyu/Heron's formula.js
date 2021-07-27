// Solutions in JavaScript

// 7kyu - Heron's formula

// https://www.codewars.com/kata/57aa218e72292d98d500240f

function heron(a,b,c) {
  let s = (a + b + c) / 2
  let result = Math.sqrt(s * (s - a) * (s - b) * (s - c))
  return result
}