// console.log("Please enter your enter")
// const prompt = require('fs').readFileSync(0, 'utf8');
// console.log("This input is received by Fs readfile - ", prompt);

// console.log("Enter the number!");
// const data = require('fs').readFileSync(0, 'utf8');
// console.log("Hi", data);

// IN order get input and close, need to follow below
// User input, Press Enter, tehn Ctrl + Z and Enter
// Pressing Enter → adds a new line ✅
// Pressing Ctrl+Z + Enter (Windows) → closes input ✅
// Then readFileSync() returns the data and the next console.log() executes ✅


const data = require('fs').readFileSync(0, 'utf8');
let mark = Number(data);

if (mark >= 90 ) {
    console.log(`A`);
} else if (mark >= 80 && mark <=89) {
    console.log(`B`);
} else if (mark >= 70 && mark <=79) {
    console.log(`C`)
} else if (data >= 60 && data <=69) {
    console.log(`D`)
} else
    console.log(`F`)