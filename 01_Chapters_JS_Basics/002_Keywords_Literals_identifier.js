let XXX = "Twenty"          //String literal in double quotes
let XXX2 = 'Twenty Two'     //String literal in single quotes

const x123 = true;          //Boolean literal
let _xxx = false;           //Boolean literal

let xxx = 10;               //Number literal
let yyy = -10;               //Number literal
var $xxx = 50;              //Number literal
let x123_$ = 60.99;         //Number literal with decimal point
let $ = .70 ;               // Valid identifier, but not recommended to use just a dollar sign.
let _ = 80. ;               // Valid identifier, but not recommended to use just an underscore.

let myName = "camelCase";   // Valid identifier, camelCase is a common convention for variable names in JavaScript.
let MyName = "PascalCase";  // Valid identifier, PascalCase is another naming convention, but less common in JavaScript.
let my_name = "snake_case"; // Valid identifier, snake_case is another naming convention, but less common in JavaScript.
let \u0062 = "Unicode Sequence of \u0062";
let \u0061 = \u0062;       // Valid identifier using Unicode escape sequence.

let hexaDecimalnumber = 0xB  ; // Hexadecimal.
let Octalnum = 0o10; // Octal number; //Octal numbers
let binaryNum = 0b1010; // Binary number
let million = 9e6; // Exponential notation, represents 1 million (1 followed by 6 zeros).
let tenthousand = 10_000;
let tiny = 9e-6; // Exponential notation, represents a very small number (1 divided by 1 million).

/*
let 123  = 60;  // Identifier cannot start with a number.
let 123xxx = 70;  // Identifier cannot start with a number.
let xx123 qwa = 70; // Spaces are not allowed inside an identifier.
let const = 80; // 'const' is a reserved keyword and cannot be used as an identifier.
let aaa&* = 90; // Special characters are not allowed in identifiers except for $ and _.
*/
    console.log(XXX);
    console.log(XXX2);
    console.log();
    console.log(x123);
    console.log(_xxx);
    console.log();
    console.log(xxx);
    console.log(yyy);
    console.log($xxx);
    console.log(x123_$);
    console.log($);
    console.log(_);
    console.log();
    console.log(myName);
    console.log(MyName);
    console.log(my_name);
    console.log(\u0061);
    console.log();
    console.log(hexaDecimalnumber);
    console.log(Octalnum);
    console.log(binaryNum);
    console.log(million);
    console.log(tenthousand);
    console.log(tiny);