//**Map** - generally used whenever we want to transform the array into a new array of the same size. 

let num = [10,20,30,40,50,60,70];

let result1 = num.map(temp => temp>=40? "Pass":"Fail");
console.log(result1);

let result2 = num.map(temp => temp*10);
console.log(result2);
