let xxx = 10;               //Number literal
let XXX = "Twenty"          //String literal
const x123 = true;          //Boolean literal
let _xxx = false;           //Boolean literal
var $xxx = 50;              //Number literal
let x123_$ = 60.99;         //Number literal with decimal point
let $ = .70 ;               // Valid identifier, but not recommended to use just a dollar sign.
let _ = 80. ;               // Valid identifier, but not recommended to use just an underscore.
let myName = "camelCase";   // Valid identifier, camelCase is a common convention for variable names in JavaScript.
let MyName = "PascalCase";  // Valid identifier, PascalCase is another naming convention, but less common in JavaScript.
let my_name = "snake_case"; // Valid identifier, snake_case is another naming convention, but less common in JavaScript.
let \u0061 = "hello";     // Valid identifier using Unicode escape sequence, represents the letter 'a'.


/*
let 123  = 60;  // Identifier cannot start with a number.
let 123xxx = 70;  // Identifier cannot start with a number.
let xx123 qwa = 70; // Spaces are not allowed inside an identifier.
let const = 80; // 'const' is a reserved keyword and cannot be used as an identifier.
let aaa&* = 90; // Special characters are not allowed in identifiers except for $ and _.
*/

    console.log(xxx);
    console.log(XXX);
    console.log(x123);
    console.log(_xxx);
    console.log($xxx);
    console.log(x123_$);
    console.log($);
    console.log(_);
    console.log(myName);
    console.log(MyName);
    console.log(my_name);
    console.log(\u0061);
