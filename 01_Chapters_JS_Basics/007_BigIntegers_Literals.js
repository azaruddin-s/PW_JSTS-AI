let qqq = 123456789012345;
let yyy = 1234567890123456789; // displays incorrectly. JavaScript's Number can safely represent integers only up to 16.
let zzz = 1234567890123456789n; // displays correctly with the help of BigINteger. The 'n' at the end indicates that this is a BigInt literal.
let ppp = BigInt(1234567890123456789); // Another way to create a BigInt using the BigInt constructor.


console.log("The output value is " + qqq + " and its Literal type is " + typeof qqq);
console.log("The output value is " + yyy + " and its Literal type is " + typeof yyy);
console.log("The output value is " + zzz + " and its Literal type is " + typeof zzz);
console.log("The output value is " + ppp + " and its Literal type is " + typeof ppp);