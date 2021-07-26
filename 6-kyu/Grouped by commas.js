function groupByCommas(n) {
  return n.length <= 3 ? n.toString() : insert(n);
}

function insert(n) {
  n = n.toString().split("").reverse();
  for (var i = 0; i < n.length; i++) {
    if (i % 3 === 0 && i > 0) {
      n[i] = n[i] + ",";
    }
  }
  return n.reverse().join("");
}