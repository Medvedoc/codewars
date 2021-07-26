function allSquaredPairs(num) {
  var array = [];
  for (var i = 0; i <= Math.sqrt(num/2); i++) {
    var j = Math.sqrt(num-i*i);
    if (j % 1 == 0) {
      array.push([i, j]);
    }
  }
  return array;
}