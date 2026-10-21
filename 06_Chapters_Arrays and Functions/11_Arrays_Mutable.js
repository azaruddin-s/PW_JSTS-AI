//1. Arrays are mutable.Original array also changed when we assigned one array directly to another array
let Original1 = [1,2,3];
let arr2 = Original1;
console.log(arr2);

arr2.push(4,5);
console.log(Original1);  // Original array also changed
console.log(arr2);
console.log("----------------------------------------------------------------------------")
// 2.Original array did not changed when we used Slice or Spread to assign one array to another array
// Becoz these create new array

let Original2 = [1,2,3];
let arr3 = [...Original2];     // Used spread (new array)
let arr4 = Original2.slice(); // Used slice (new array)
console.log(arr3);
console.log(arr4);

arr3.push(4,5);
arr4.push(4,5);
console.log(Original2);  // Original array didn't changed
console.log(arr3);
console.log(arr4);

console.log("----------------------------------------------------------------------------")