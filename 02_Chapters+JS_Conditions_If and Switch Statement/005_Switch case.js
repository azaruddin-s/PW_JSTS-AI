/* In a JavaScript switch statement, the comparison is case-sensitive because switch uses strict equality (===) internally.
    Switch Statement in JavaScript: The switch statement evaluates an expression once and then compares it against multiple case values. 
    expression -> case 1, case 2, case 4..... default....	
  In a JavaScript switch statement, the comparison is case-sensitive because switch uses strict equality (===) internally.*/

let state = "Andhra";   

switch (state) {
    case "Andhra":
        console.log("Vijayawada");
        break;

    case "Tamil Nadu":
        console.log("Chennai");
        break;

    case "Karnataka":
        console.log("Bangalore")
        break;

    default:
        console.log("Not matched");

}