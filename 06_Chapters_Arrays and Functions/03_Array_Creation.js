// Array Declaration 1
let xxx = [1,"two", 3];  // Initialized entire Array
console.log(xxx[1]);

// Array Declaration 2 but empty array & undefined
let xxxx = new Array(3); // Creates Empty array
console.log(xxxx[0]) 

// Array Declaration 3 and need to declare each index separately
let xxxxx = new Array(3);  
xxxxx[0] = "Hi";
xxxxx[1] = true ;
[xxxxx[2],xxxxx[3]] = ["two", "Three"];
console.log(xxxxx[0]);
console.log(xxxxx[1,2]); // Assumes array index of 2 if we declare xxxxx[1,2] 
console.log(xxxxx[3]);

//Array Declaration 4 assign all index toghther
let yyy = new Array("one", 2, true);
console.log(yyy[2]);

//Array Declaration 5 using Array.of assign all index toghther
let zzz = Array.of("One", 2, null)
console.log(zzz[1]);

// Array Declaration 6 and Modify
let www = Array.of("One", 2, null);
www[1] = "Changed"
console.log(www[1]); // Latest value assigned