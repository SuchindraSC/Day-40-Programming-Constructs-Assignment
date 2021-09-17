readlineSync = require("readline-sync");

let n = readlineSync.question("Enter The Value Of Nth Number: ");
N = parseInt(n);
let Hn = 0.0;
if (N <= 0){
    console.log("Sorry! This Number Is Not Acceptable. Enter The Valid Value of N");
}
else{
    console.log("\nHarmonic Series Is Given By: ");
    for (let i = 1; i<=N; i++){
        console.log("1/", +i);
        Hn += 1 / i;
    }
    console.log("Sum Of Harmonic Number Is: ");
    console.log(Hn);
}