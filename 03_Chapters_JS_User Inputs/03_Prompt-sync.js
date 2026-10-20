// To use prompt-syn we need to run via node js. we need to first convert our JS project into node.js project. so we need to follow steps
// 1. Run Powershell as administrator
// 2. run "npm init" command - This will add package.json
// 3. run prompt-sync command - "npm i prompt-sync"
// 4. Always run the Program in the terminal only

const prompt = require('prompt-sync')();

let userInput = Number(prompt("Enter the number - "));
console.log(`Your number is ${userInput}`);


let userInput2 = String(prompt("Enter the name - "));
console.log(`Thank you, ${userInput2}!`);
