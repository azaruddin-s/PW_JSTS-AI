
//Write a Java program that prints a multiplication table for a given number 

const prompt = require('prompt-sync')();
let tablenumber = prompt("Enter the number for which tables needs to be printed - ")

let i = 1                           // I - Initilization
while (i <= 10) {               // C - Condition-while keeps executing the code block as long as the condition is true.
    let multiply = tablenumber * i;
    console.log(`${tablenumber} x ${i} = ${multiply}`);
    i++;                           // U - Updation
}