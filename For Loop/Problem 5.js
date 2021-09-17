readlineSync = require("readline-sync");
let num = readlineSync.question("Enter A Number: ");
number = parseInt(num);
let fact = 1
for(i=1;i<=number;i++){      
    fact=fact*i;      
    }      
console.log("Factorial Of "+number+" Is: "+fact); 