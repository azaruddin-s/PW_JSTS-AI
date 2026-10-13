let age = 40;
let major = age > 18 ? "Yes" : "No" ;
console.log(major);

let actualerror = 200;
let expectederror = 200;
let Output = actualerror = expectederror ? "Pass" : "Fail";
console.log(Output);

let LoginPage1 = true;
let SystemOn1 = LoginPage1 ? "with Login page displayed" : "with out login page";
console.log("System turned On", SystemOn1 , "Successfully");

let LoginPage2 = false;
let SystemOn2 = LoginPage2 ? "with Login page displayed" : "with out login page";
console.log("System turned On", SystemOn2 , "Successfully");

let Low = 550;
let High = 500;
let Temp = Low <= High ? "Normal" : "Abnormal";
console.log( `Your Low temperature is ${Low} and looks it is ${Temp}` );  // For Template Literals used to replace a value in the multi-line


//Nested Ternary with multiple condition
let State = `TN` ;
let city = `Chennai`;
let myArea = State === "TN" ? (city==='Chennai'? "Porur":"Kovur") : "Not Sure";
console.log(`Your state is ${State} and city is ${city}. And you area is ${myArea}`);

let State1 = `TN` ;
let city1 = `Trichy`;
let myArea1 = State1 === "TN" ? (city1==='Chennai'? "Porur":"Kovur") : "Not Sure";
console.log(`Your state is ${State1} and city is ${city1}. And you area is ${myArea1}`);

let State2 = `Telangana` ;
let city2 = `Hyderabad`;
let myArea2 = State2 === "TN" ? (city1==='Chennai'? "Porur":"Kovur") : "Not Sure";
console.log(`Your state is ${State2} and city is ${city2}. And you area is ${myArea2}`);

let Low1 = 650;
let Temp1 = (Low1 <  500) ? "Normal" :
                           (Low1 < 600) ? "Abnormal":
                                (Low1 < 800) ? "Very abnormal" : " Go to doctor before very abnormal"
console.log( `Your Low temperature is ${Low1} and ${Temp1}`);
