// JavaScript arrays are dynamic

let arr = [1,2,3];
console.log("1. ", arr); // Output is [ 1, 2, 3 ]

arr.push("four",5);  // Add new array at the END
console.log("2. ", arr);

arr.pop();  // Remove new array at the END
console.log("3. ", arr);

arr.unshift("zero");  // Add new array at the BEGINING
console.log("4. ", arr);

arr.shift("zero");  // Remove new array at the BEGINING
console.log("5. ", arr);

//splice(start, deleteCount, ...items) is used to add, remove, or replace elements in an array. It modifies the original array.
arr.splice(1,2);                    // Delete upto 2 index starting index 1
console.log("6. ", arr);

arr.splice(1,0,"Inserted");         // Doesn't Delete instead it is inserted at the start index 1
console.log("7. ", arr);

arr.splice(2,1,"Replaced");          // Delete 1 and it is replaced at the start index 2
console.log("8. ", arr);

arr.splice(0,2,"One");              // Do 2 index deleted and one inserted at start of index 0
console.log("9. ", arr);

arr.splice(0,2,1,2);                 // Do 2 index deleted and two inserted at start of index 0
console.log("10. ", arr);

arr.push("Three", 4, 5,"Six");
console.log("11. ", arr);

//slice(start, end) copies a portion of the array without changing the original array. The end index is not included.
console.log("12. ", arr.slice(2,4));

console.log("13. ", arr.slice(2));   // slices from left to right completely if no end mentioned

console.log("14. ", arr.slice(-2));  // Per negative index, it slices -2 and -1. since it always goes from left to right.

console.log("15. ", arr.slice(2,0));  // Returns empty array since reverse indexing is not allowed
console.log("16. ", arr.slice(-2,-4));  // Returns empty array since reverse indexing is not allowed