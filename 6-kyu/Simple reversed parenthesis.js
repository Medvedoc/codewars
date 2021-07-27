// Solutions in JavaScript

// 6kyu - Simple reversed parenthesis

// https://www.codewars.com/kata/5a3f2925b6cfd78fb0000040

function solve(s){
  if (s.length%2) return -1;
  while (/\(\)/g.test(s)) s = s.replace(/\(\)/g, "");
  let cnt = 0;
  for (let i = 0; i < s.length -1; i += 2) {
    s[i] !== s[i + 1] ? cnt+=2 : cnt++;
  }
  return cnt;
}