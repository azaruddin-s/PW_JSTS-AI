//   ==   → loose equality  (does type coercion, surprising)
//   ===  → strict equality (no coercion, what you usually want)

// Coercion means JavaScript automatically converts a value from one data type to another type when needed based on the context of the Operator.
// ECMAScript equality rules say: If one value is a Number and the other is a String, convert the String to a Number, then compare if we use loose equality operator (==).

console.log("" == 0); // true
console.log("0" == 0); // true
console.log(0 == "0"); // true
console.log(0 == ""); //false
console.log(""== "0"); // false
console.log();
//  If we use strict equality operator (===), it will not do any type conversion and will return false if the types are different.
console.log("" === 0);
console.log(""=== "0");
console.log(0 === "0");

// JavaScript asks: "What type is needed for this operation?"
// For +, Needs string concatenation. Number → String
// For -, Needs numeric subtraction. String → Number
// similarly it behaves diffrently for other operators like *, /, %, etc. which need numeric values. So it converts the string to number if possible.
