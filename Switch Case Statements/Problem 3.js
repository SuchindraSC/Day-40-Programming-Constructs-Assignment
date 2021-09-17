readlineSync = require("readline-sync");
let Number = readlineSync.question("Enter The Number: ");
Num = parseInt(Number);

switch(Num){
    case 1:
        return console.log("UNIT");
    case 10:
        return console.log("TEN");
    case 100:
        return console.log("HUNDRED");
    case 1000:
        return console.log("THOUSAND");
    case 10000:
        return console.log("TEN THOUSAND");
    case 100000:
        return console.log("HUNDRED THOUSAND");
    case 1000000:
        return console.log("MILLION");
    case 10000000:
        return console.log("TEN MILLION");
    case 100000000:
        return console.log("HUNDRED MILLION");
    case 1000000000:
        return console.log("ONE BILLION");
    default:
     return console.log("INVALID INPUT");
}