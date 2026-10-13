// Pre - First Increase/Decrease the value by 1, then assign the value - ++a / --a
// Post - First assign the value, then Increase/Decrease by 1 - a++ / a--

let a = 100;
console.log(a++ + ++a + a++ + ++a); // 100 + 102 + 102 + 104 = 408
console.log(a); //104

let b = 37;
console.log(--b + b--);  // 36 + 36 = 72
console.log(b); // 35

let c = 5;
let d = c-- - --c;  // 5 - 3 = 2
console.log(d, c); // 2, 3

let i  = 1;
let r = i++ > 1 ? i++ : ++i;  // 1>1 ? 2 : 3 //Due to failed (1>1) condition, it navigates to false statement (++i)
console.log(r, i); // 3 , 3

let ii  = 1;
let rr = ii++ >= 1 ? ii++ : ++ii;  // 1>=1 ? 2 : 3 //Due to failed (1>1) condition, it navigates to false statement (++i)
console.log(rr, ii); //  2 , 3
