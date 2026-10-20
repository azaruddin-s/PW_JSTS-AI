let mark = "frrg" ;

if (isNaN(mark)) {           // To verify the input is valid number
    console.log(`You entered invalid input of ${mark} as ${typeof mark}. Please enter the valid number input in the range of 0-100.`)
} else if (mark > 0 && mark <= 100) {
    if (mark > 90) {
        console.log(`You have secured mark of ${mark} and it is Very Excellent`);
    } else if (mark > 80 && mark <= 90) {
        console.log(`You have secured mark of ${mark} and it is Excellent`);
    } else if (mark > 70 && mark <= 80) {
        console.log(`You have secured mark of ${mark} and it is Good`)
    } else if (mark >= 45 && mark <= 70) {
        console.log(`You have secured mark of ${mark} and it is Average`)
    } else {
        console.log(`You have secured mark of ${mark} and Failed. you have not crosed Pass mark of 45`)
    }
    } else console.log(`You entered invalid mark ${mark}. Please enter the mark in the range of 0-100.`);

    ///null and boolean is not working
    // string, undefined is working

 