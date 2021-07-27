// Solutions in JavaScript

// 7kyu - Sum of a Beach

// https://www.codewars.com/kata/5b37a50642b27ebf2e000010

function sumOfABeach(beach) {
  let regex = /sand|water|fish|sun/gi;
  let array = beach.match(regex);
  return !array ? 0 : array.length;
}