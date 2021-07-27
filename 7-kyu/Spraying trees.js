// Solutions in JavaScript

// 7kyu - Spraying trees

// https://www.codewars.com/kata/5981a139f5471fd1b2000071

let array = {Monday: 'James', Tuesday: 'John', Wednesday: 'Robert', Thursday: 'Michael', Friday: 'William'}
function task(w, n, c) {
	return `It is ${w} today, ${array[w]}, you have to work, you must spray ${n} trees and you need ${n * c} dollars to buy liquid`
}