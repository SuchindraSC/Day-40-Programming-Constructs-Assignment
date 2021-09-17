readlineSync = require("readline-sync");
let N = readlineSync.question("Enter The Value Of n: ");
n = parseInt(N);

for(let i = 1; i <= 2**n; i++){
    result = 2**i;
    console.log(result);
}