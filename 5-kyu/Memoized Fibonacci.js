// Solutions in JavaScript

// 5kyu - Memoized Fibonacci

// https://www.codewars.com/kata/529adbf7533b761c560004e5

const fibonacci = n => {
    if (n == 0 || n == 1) return n;
    let array = [1, 1];
    for (let i = 1; i < n; i++){
      array.push(array[i-1] + array[i]);
    }
    return array[array.length -2]
}