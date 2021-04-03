
let num = 266219 ,
    nums = num.toString().split(''),
    newNum = nums.map(Number) ,
    result = 1 ;

for ( let i = 0; i < newNum.length; i++ ) {
    result = result * newNum[i] ** 3;
};

    console.log(String(result).slice(0,2));

    






