let results = ["Pass","Fail","Blocked","No run","Executing"];

console.log(results.indexOf("Pass")); // Found display the index 0
console.log(results.indexOf("fail"));  // Not found so displays -1. Case Sensitive

console.log(results.lastIndexOf("Executing")); // Last index of array
console.log(results.includes("No run")); //return Boolean

console.log(results.find(temp=> temp ==="Blocked"));

