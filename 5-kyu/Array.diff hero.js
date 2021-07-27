// Solutions in JavaScript

// 5kyu - Array.diff hero

// https://www.codewars.com/kata/581fc49b55c3d2d83c0000f8

function array_diff_very_fast(a, b) {
    let result = b.filter(function(e, i){return b.indexOf(e) === i})
    return a.filter(e => !result.includes(e))
}