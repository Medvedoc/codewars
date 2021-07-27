// Solutions in JavaScript

// 7kyu - Fizz Buzz

// https://www.codewars.com/kata/5300901726d12b80e8000498

function fizzbuzz(n)
{
  let array = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) array.push('FizzBuzz')
    else if (i % 3 == 0) array.push('Fizz')
    else if (i % 5 == 0) array.push('Buzz')
    else array.push(i)
  }
  return array;
}