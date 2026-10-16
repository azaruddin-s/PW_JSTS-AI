// The Nullish Coalescing Operator (??) returns the right-hand value only when the left-hand value is null or undefined.
let Name1 = null;
console.log(Name1 ?? "Goodname1");

let Name2;
console.log(Name2 ?? "Goodname2");

let Name3 = undefined;
console.log(Name3 ?? "Goodname3");

let Name4 = "Abdul";
console.log(Name4 ?? "Goodname4");

let Name5 = 10;
console.log(Name5 ?? "Goodname5");
