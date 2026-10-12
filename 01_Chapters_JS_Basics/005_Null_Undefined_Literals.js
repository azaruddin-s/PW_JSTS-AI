let nullValue = null;
//let nullValue = "This variable was initially null, but now it has been assigned a value.";

let undefinedValue;  //JavaScript assigns undefined

let csxs = undefined; //Developer assigns undefined
//let csxs = "This variable was initially undefined, but now it has been assigned a value.";

console.log("The output value is " + nullValue + " and its Literal type is " + typeof nullValue);
console.log("The output value is " + undefinedValue + " and its Literal type is " + typeof undefinedValue);
console.log("The output value is " + csxs + " and its Literal type is " + typeof csxs);

function checkNullUndefined() {
    //return nothing
} console.log(checkNullUndefined());


/* undefined IS NOT A LITERAL, but null IS A LITERAL.
undefined means a variable has been declared but has not yet been assigned a value. null is an intentional assignment that represents the absence of a value. JavaScript automatically assigns undefined, whereas developers explicitly assign null.

 null is a special value that represents "no value" or "empty". It is an assignment value, and can be assigned to a variable as a representation of no value. null is not 0 since 0 is a number, and null is an object.

 undefined is a special value that represents "not defined". It is the default value of uninitialized variables. If a variable has been declared but not assigned a value, it will have the value undefined.
*/
