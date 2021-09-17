readlineSync = require("readline-sync");
let INPUT_YEAR = readlineSync.question("Enter The Year: ");

let y = INPUT_YEAR % 4;

if(y != 0){
    console.log("Input Year Is Not A Leap Year")
} 
else{
    x = INPUT_YEAR % 100;
    if(x != 0){
        console.log("Input Year Is A Leap Year");
    }
    else{
        let z = INPUT_YEAR % 400;
        if(z != 0)
        {
            console.log("Input Year Is Not A Leap Year");
        }
        else{
            console.log("Input Year Is A Leap Year");
        }
    }
}