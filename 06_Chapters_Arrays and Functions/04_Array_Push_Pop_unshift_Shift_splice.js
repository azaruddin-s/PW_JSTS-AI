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

arr.splice(1,2);   // Delete upto 2 index starting index 1
console.log("6. ", arr);

arr.splice(1,0,"Inserted"); // Doesn't Delete instead it is inserted at the start index 1
console.log("7. ", arr);

arr.splice(2,1,"Replaced"); // Delete 1 and it is replaced at the start index 2
console.log("8. ", arr);

arr.splice(0,2,"One"); // Do 2 index deleted and one inserted at start of index 0
console.log("9. ", arr);

arr.splice(0,2,1,2); // Do 2 index deleted and two inserted at start of index 0
console.log("10. ", arr);

