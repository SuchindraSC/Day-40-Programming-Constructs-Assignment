readlineSync = require("readline-sync");
number = readlineSync.question("Enter The Number To Check It Is Prime Or Not: ");
var IsPrime = true;
for (var i = 2; i < number/2; i++){
    if (number%i == 0){
        IsPrime = false;
        break;
    }
}
if (IsPrime){
    console.log("The Number Is Prime Number");
}
else {
    console.log("The Number Is Not A Prime Number");
}