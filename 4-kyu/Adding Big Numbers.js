// Solutions in JavaScript

// 4kyu - Adding Big Numbers

// https://www.codewars.com/kata/525f4206b73515bffb000b21

function add(a,b) {
    let [a_str, b_str] = [a, b].map((e) => e.split('').reverse().join(''))
    let number = 0
    let result = []
    for (let i = 0; i < (a.length > b.length ? a.length : b.length); i++) {
        let sum = ((+a_str[i] || 0) + (+b_str[i] || 0) + number)
        number = sum > 9 ? Math.floor(sum / 10) : 0
        result.push(sum % 10)
    }
    if (number !== 0) result.push(number)
    return result.reverse().join('')
}