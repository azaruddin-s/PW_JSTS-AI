// Sum of even numbers upto 20
// Program 1
let i = 0;
let j = 0;

do {
    i += 2;
    j = i + j;

} while (i < 30)
console.log("Sum of even numbers upto 20 is " + j);

// Program 2
let x = 0;
let y = 0;
do {
    x += 2;
    if (x <= 20) {
        y += x;
    }

} while (x <= 20);
console.log("Sum of even numbers upto 20 is " + y);