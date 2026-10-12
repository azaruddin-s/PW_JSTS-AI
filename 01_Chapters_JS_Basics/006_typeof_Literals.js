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
let million = 1e6; // Exponential notation, represents 1 million (1 followed by 6 zeros).
let tenthousand = 10_000;
let tiny = 1e-6; // Exponential notation, represents a very small number (1 divided by 1 million).

    console.log("The output value is " + XXX + " and its Literal type is " + typeof XXX);
    console.log("The output value is " + XXX2 + " and its Literal type is " + typeof XXX2);
    console.log();
    console.log("The output value is " + x123 + " and its Literal type is " + typeof x123);
    console.log("The output value is " + _xxx + " and its Literal type is " + typeof _xxx);
    console.log();
    console.log("The output value is " + xxx + " and its Literal type is " + typeof xxx);
    console.log("The output value is " + yyy + " and its Literal type is " + typeof yyy);
    console.log("The output value is " + $xxx + " and its Literal type is " + typeof $xxx);
    console.log("The output value is " + x123_$ + " and its Literal type is " + typeof x123_$);
    console.log("The output value is " + $ + " and its Literal type is " + typeof $);
    console.log("The output value is " + _ + " and its Literal type is " + typeof _);
    console.log();
    console.log("The output value is " + myName + " and its Literal type is " + typeof myName);
    console.log("The output value is" + MyName + " and its Literal type is " + typeof MyName);
    console.log("The output value is " + my_name + " and its Literal type is " + typeof my_name);
    console.log("The output value is " + \u0061 + " and its Literal type is " + typeof \u0061);
    console.log();
    console.log("The output value is " + hexaDecimalnumber + " and its Literal (Hexadecimal) type is " + typeof hexaDecimalnumber);
    console.log("The output value is " + Octalnum + " and its Literal (Octal) type is " + typeof Octalnum);
    console.log("The output value is " + million + " and its Literal (Exponential) type is " + typeof million);
    console.log("The output value is " + tiny + " and its Literal (Exponential) type is " + typeof tiny);
    console.log("The output value is " + binaryNum + " and its Literal (Binary) type is " + typeof binaryNum);
