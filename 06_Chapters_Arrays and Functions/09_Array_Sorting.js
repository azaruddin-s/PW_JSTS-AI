let num1 = [3,8,4,9,1,5];
console.log(num1.sort());

//Lexicographic sorting which technically incorrect. sorts elements as strings by default, not as numbers. So it does lexicographically —character by character. i.e.) digits comes before UPPERCASE. UPPERCASE comes before lower

let num2 = Array.of(10,31,21,12,2,5);
console.log(num2.sort());

//For numeric ascending order, pass a comparison function:

console.log(num2.sort((a,b) => a-b));

//For numeric descending order, reverse the subtraction

console.log(num2.sort((a,b) => b-a));

//For String comparison, need to use localcompare sort for ignoring case

let alpha1 = new Array("Cab","dog","Ball", "Alien","boy");
console.log(alpha1.sort());
console.log(alpha1.sort((a,b) => a.localeCompare(b)));
