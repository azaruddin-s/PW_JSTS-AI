// Arithmetic Operators
let a = 10;
let b = 10+20-5;
let c = a*b;
let d = c/a;
let e = d%3; // Modulus operator returns the remainder of a division operation
let f = 3**3; // Exponentiation operator raises the first operand to the power of the second operand

// Assignment Operators
let g = 100;
g += 50; // Addition assignment operator adds the right operand to the left operand and assigns the result to the left operand
let h = 100;
h -= 40; // Subtraction assignment operator subtracts the right operand from the left operand and assigns the result to the left operand
let i=100;
i*= 2; //200
let j=100;
j/= 2; //50
let k=100;
k%= 3; //1
let l=10;
l**= 3; //1000

//comparison operators
console.log(3>2);      // >  returns true if the left operand is greater than the right operand
console.log(3<2);      // < returns true if the left operand is less than the right operand
console.log(3>=2);     // >= returns true if the left operand is greater than or equal to the right operand
console.log(3<=3);     // <= returns true if the left operand is less than or equal to the right operand
console.log(3==2);     // == returns true if the left operand is equal to the right operand
console.log(3!=2);     // != returns true if the left operand is not equal to the right operand

console.log((3=="3") + " (3=='3')");   // loose equality returns true if the left operand is equal to the right operand, but does not check for data type equality only VALUE CHECK
console.log((3==="3") + " (3==='3')");  // strict equality returns true if the left operand is equal to the right operand and they are of the SAME DATATYPE and VALUE CHECK
console.log((3===3) + " (3===3)");
console.log((3===2) + " (3===2)");
console.log((3!==2) + " (3!==2)"); // !== is the strict not-equal operator in JavaScript. It is the opposite of ===. We dont have !=== operator.
console.log((3!=="3") + " (3!=='3')");
console.log((3!==3) + " (3!==3)");

console.log();
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log();
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(l);
