// Print numbers from 1 to n. For multiples of 3, print 'Fizz'. For multiples of 5, print 'Buzz'. For multiples of both 3 and 5, print 'FizzBuzz'.


let i = 0;

for (i = 1; i <= 30; i++) {

    if (((i % 3) === 0) && ((i % 5) === 0)) {
        console.log(i, " FizzBuzz");
    } else if (i % 5 === 0) {
        console.log(i, " Buzz");
    } else if ((i % 3) === 0) {
        console.log(i, " Fizz");
    } else
    console.log(i);
}

