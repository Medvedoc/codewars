// Solutions in JavaScript

// 6kyu - Highest Scoring Word

// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

let x = ""
function high(x) {
    let letter = "abcdefghijklmnopqrstuvwxyz".split("")
    let array = {}
    let result = ""
    let result_total = 0
  
    for (let i = 0; i < letter.length; i++) {
        array[letter[i]] = i + 1
    }
  
    x = x.split(" ")

    for (let j = 0; j < x.length; j++) {
        let indexXSplit = x[j].split("")
        let scoreState = 0
        indexXSplit.forEach(e => {scoreState += array[e]})
        if(scoreState > result_total) {
            result = x[j]
            result_total = scoreState
        }
    }

    return result;
}