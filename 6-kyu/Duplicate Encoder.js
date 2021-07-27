// Solutions in JavaScript

// 6kyu - Duplicate Encoder

// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word){
    let string = word.toLowerCase();
    let result = '';
    for (var i = 0; i < string.length; i++) {
        string.lastIndexOf(string[i]) === string.indexOf(string[i]) ? result += '(' : result += ')';
    }
    return result;
};