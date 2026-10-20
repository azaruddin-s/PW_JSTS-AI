// Calculate the letter grade based on a numeric score. A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60.

let mark = 75;

if (mark >= 90 ) {
    console.log(`A`);
} else if (mark >= 80 && mark <=89) {
    console.log(`B`);
} else if (mark >= 70 && mark <=79) {
    console.log(`C`)
} else if (mark >= 60 && mark <=69) {
    console.log(`D`)
} else
    console.log(`F`)

