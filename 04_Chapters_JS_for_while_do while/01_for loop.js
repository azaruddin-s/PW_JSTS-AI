/* for loop is generally used when you know how many times you want to run a loop.
For ( I, C, U)
I - Initialization 
C - Condition
U - Updation - You can use whichever you want pre or post, i++,++i */

const prompt = require('prompt-sync')();
let tablenumber = prompt("Enter the number for which tables needs to be printed - ")

for (let i = 1; i <= 10; i++) {   //Pre or Post increment/decrement does not make difference in for loop

    multiply = tablenumber * i;
    console.log(`${tablenumber} x ${i} = ${multiply}`);

}