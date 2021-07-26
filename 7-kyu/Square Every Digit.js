function squareDigits(num){
  
    var i, sqr=[],n;
    num = num.toString();
    for(i=0;i<num.length;i++){
        n = Number(num[i]);
    sqr.push(n*n);
    }
    return Number(sqr.join(""));
  
}