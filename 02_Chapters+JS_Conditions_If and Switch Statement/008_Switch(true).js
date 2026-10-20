const prompt = require ('prompt-sync')();
let score = prompt("Enter your score - ");

switch (true) {

    case (score === 100):
        console.log("Very Very Excellent");
        break;

    case (score > 80 && score <= 99):
        console.log("Excellent");
        break;

    case (score > 60 && score <= 80):
        console.log("Good");
        break;

    case (score > 50 && score <= 60):
        console.log("Average");
        break;

    case (score >= 0 && score < 50):
        console.log("Poor");
        break;

    default:
        console.log("Invalid input. please enter score only in the range of 0-100");

}