readlineSync = require("readline-sync");
let flag = true;

a = readlineSync.question("Enter The Start Value: ");
startValue = parseInt(a);
b = readlineSync.question("Enter The End Value : ");
endValue = parseInt(b);
console.log("Prime Numbers Between "+startValue+" and "+endValue+" Are : ");
if(startValue > endValue){
    console.log("You Entered Wrong Range.");
}
else{
    for(var i = startValue; i <= endValue; i++){
        let counter = 0;
        for(var j = 2; j <= i/2; j++)
        {
            if(i % j == 0){
                counter++;
                break;
            }
        }
        if (counter == 0 && i != 1){
            console.log(" "+i);
        }
    }
}