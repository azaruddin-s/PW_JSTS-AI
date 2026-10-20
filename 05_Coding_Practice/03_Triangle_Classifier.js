// Write a program that takes three sides of a triangle and classifies it as Equilateral, Isosceles, or Scalene.

const prompt  = require('prompt-sync')();

// let angle1st = prompt("Enter the 1st angle of Triangle - ");
// let angle2rd = prompt("Enter the 2rd angle of Triangle - ");
// let angle3rd = prompt("Enter the 3rd angle of Triangle - ");

let angleOfTriangle = prompt("Enter all the 3 angles of Triangle ");

let [angle1st, angle2rd, angle3rd] = angleOfTriangle.split(" ");

if ((angle1st === angle2rd) && (angle1st === angle3rd)){
    console.log("Your Triangle is an Equilateral Triangle");
} else if ((angle1st === angle2rd) || (angle1st === angle3rd)){
    console.log("Your Triangle is an Isosceles Triangle");
} else
    console.log("Your Triangle is Scalene Triangle");