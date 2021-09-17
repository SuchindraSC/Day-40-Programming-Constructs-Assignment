readlineSync = require("readline-sync");
let Numbers = readlineSync.question("Enter The Number: ");
Num = parseInt(Numbers);
switch(Num){
    case 1:
        return console.log("SUNDAY");
    case 2:
        return console.log("MONDAY");
    case 3:
        return console.log("TUESDAY");
    case 4:
        return console.log("WEDNESDAY");
    case 5:
        return console.log("THURSDAY");
    case 6:
        return console.log("FRIDAY");
    case 7:
        return console.log("SATURDAY");
    default:
        return console.log("INVALID INPUT");
}