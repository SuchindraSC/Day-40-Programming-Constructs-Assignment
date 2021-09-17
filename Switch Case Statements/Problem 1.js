readlineSync = require("readline-sync");
Num = readlineSync.question("Enter The Number: ");
Numbers = parseInt(Num);

switch(Numbers){
    case 1:
        return console.log("ONE");
    case 2:
        return console.log("TWO");
    case 3:
        return console.log("THREE");
    case 4:
        return console.log("FOUR");
    case 5:
        return console.log("FIVE");
    case 6:
        return console.log("SIX");
    case 7:
        return console.log("SEVEN");
    case 8:
        return console.log("EIGHT");
    case 9:
        return console.log("NINE");
    default:
        return console.log("INVALID NUMBER");
}