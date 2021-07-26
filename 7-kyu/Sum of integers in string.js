function sumOfIntegersInString(str){
  return [...str].map(i=>{
    if(isFinite(i)==true){
      return i
    }
    else{
      return " "
    } 
  })
    .join("").split(" ").filter(i=>i!=" ").map(i => Number(i)).map(i=>x+=i, x=0).reverse()[0]
}