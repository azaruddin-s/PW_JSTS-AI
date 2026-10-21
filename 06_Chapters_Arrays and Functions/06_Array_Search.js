// Used when we want to transform/change every element of an array. It goes to each array, applies function defined and returns new set of array in same length of input 

let num = [10,20,30,40,50,60,70];

console.log("1. ", num.find(temp => temp>20));   //find 1st element matching condition
console.log("2. ", num.findLast(temp => temp>20)); //find last element matching condition

console.log("3. ", num.filter(temp=> temp>20));   //selects every element but return only matched values when condition is met. Find and select

console.log("4. ", num.some(temp => temp>40));   //Some array element can pass
console.log("4.1. ", num.some(temp => temp>70)); 

console.log("5. ", num.every(temp => temp>5)); // All array element must pass
console.log("6. ", num.every(temp => temp>20)); // All array element must pass

console.log("7. ", num.findIndex(temp => temp>20));
console.log("8. ", num.findLastIndex(temp => temp>20));

console.log("9. ", num.length);




