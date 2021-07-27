// Solutions in JavaScript

// 7kyu - Vowel Count

// https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
  var vowelsCount = 0;
  str.split('').forEach(array => {if (array === 'a' || array === 'e' || array === 'i' || array === 'o' || array === 'u') vowelsCount++;});
  return vowelsCount;
}