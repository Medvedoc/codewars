// Solutions in JavaScript

// 3kyu - Battleship field validator

// https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7/train/javascript

function validateBattlefield(field) {
    var result = (row, col) => (row < 0 || col < 0 || row > 9 || col > 9) ? 0 : field[row][col];
    for (var ships = [10,0,0,0,0], row = 0; row < 10; row++) {
      for (var col = 0; col < 10; col++) {
        if (result(row,col) ) {
          if (result(row-1, col-1) || result(row-1, col+1) ) return false; // Corner is touching
          else if (result(row-1, col  ) && result(row  , col-1) ) return false; // Side is touching
          else if ( ( field[row][col] += result(row-1, col) + result(row, col-1) ) > 4 ) return false; // Ship is too long
          else ships[field[row][col]]++; ships[field[row][col] - 1]--;
    } } }
    return [0,4,3,2,1].every((s,i) => s == ships[i]);
  }