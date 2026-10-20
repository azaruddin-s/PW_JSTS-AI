/* while keeps executing the code block as long as the condition is true. 
 If we use while(true), it keeps executing and never exit since it will never get false. 
 so break is used to exit when the condition is met  */

const prompt = require ('prompt-sync')();
while (true) {               // 
    let password = prompt("Enter password: ");

    if (password === "admin") {
        console.log("Login Success");
        break;   //  It will put you out of the loop (Terminate the loop and put you out of that loop )
    }else 
        console.log("Incorrect password")
        console.log();
}