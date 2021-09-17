readlineSync = require("readline-sync");
let N = readlineSync.question("Enter The Value Of n: ");
n = parseInt(N);

if(n > 100){
    console.log("Entered Number Is Out Of Range.");
}
else{
    if (n % 9 == 1){
        console.log("Entered Number Is A Magic Number");
    }
    else{
        console.log("Entered Number Is Not A Magic Number");
    }
}