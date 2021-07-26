// Solutions in JavaScript

// 4kyu - Adding Big Numbers

// https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript

function add(a,b) {
    const [stra, strb] = [a, b].map((el) => el.split('').reverse().join(''));
    const len = a.length > b.length ? a.length : b.length;
    const result = [];
    let rest = 0;
    for (let i = 0; i < len; i++) {
        const sum = (+stra[i] || 0) + (+strb[i] || 0) + rest;
        rest = sum > 9 ? Math.floor(sum / 10) : 0;
        result.push(sum % 10);
    }
    if (rest !== 0) {
        result.push(rest);
    }
    return result.reverse().join('');
};