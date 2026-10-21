// 1. Array Declaration
let xxx = [1,"two", 3];  // Initialized entire Array
console.log(xxx[1]);

// 2. Array Declaration but empty array & undefined
let xxxx = new Array(3); // Creates Empty array
console.log(xxxx[0]) 

// 3. Array Declaration and need to declare each index separately
let xxxxx = new Array(3);  
xxxxx[0] = "Hi";
xxxxx[1] = true ;
[xxxxx[2],xxxxx[3]] = ["two", "Three"];
console.log(xxxxx[0]);
console.log(xxxxx[1,2]); // Assumes array index of 2 if we declare xxxxx[1,2] 
console.log(xxxxx[3]);

// 4. Array Declaration assign all index toghther
let yyy = new Array("one", 2, true);
console.log(yyy[2]);

// 5.Array Declaration using Array.of assign all index toghther
let zzz = Array.of("One", 2, null)
console.log(zzz[1]);

// 6.Array Declaration and Modify
let www = Array.of("One", 2, null);
www[1] = "Changed"
console.log(www[1]); // Latest value assigned

// 7.Array Declaration - Destructuring
let [zero, one, two] = [0,1,2];
console.log(zero);
console.log(one);
console.log(two);

// 8.Array Declaration - Spread
let [first, second,...remaining] = [0,1,2,3,4];
console.log(first);
console.log(second);
console.log(remaining);