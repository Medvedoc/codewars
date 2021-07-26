const multiTable = number => {
    let array=[1,2,3,4,5,6,7,8,9,10];
    let result='';
    for (let i = 0; i < array.length; i++) {
        const elem = array[i]; 
        if(i==9){
            result +=`${elem} * ${number} = ${elem*number}`;
            return result;
        }
        result +=`${elem} * ${number} = ${elem*number}\n`;
    }
    return result;
}