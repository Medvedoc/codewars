// Solutions in JavaScript

// 3kyu - Battleship field validator

// https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7

function validateBattlefield(field) {
    let result = (r, c) => (r < 0 || c < 0 || r > 9 || c > 9) ? 0 : field[r][c]
    let ship = [10,0,0,0,0]
    for (ship, r = 0; r < 10; r++) {
      for (c = 0; c < 10; c++) {
        if (result(r,c) ) {
          if (result(r-1, c-1) || result(r-1, c+1)) return false
          else if (result(r-1, c) && result(r, c-1)) return false
          else if ((field[r][c] += result(r-1, c) + result(r, c-1)) > 4) return false
          else ship[field[r][c]]++; ship[field[r][c] - 1]--
        } 
      } 
    }
    return [0,4,3,2,1].every((s,i) => s == ship[i]);
  }