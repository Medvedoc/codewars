// Solutions in JavaScript

// 6kyu - Count characters in your string

// https://www.codewars.com/kata/52efefcbcdf57161d4000091

let string = ""
function count(string) {
    let result = {};
    string = string.split("");
    string.forEach(array => {
        if(result[array] == undefined) result[array] = 1
        else result[array]++
    })
    return result
}