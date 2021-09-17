readlineSync = require("readline-sync");
let Num1 = readlineSync.question("Enter The Number 1: ");
let Num2 = readlineSync.question("Enter The Number 2: ");
let Num3 = readlineSync.question("Enter The Number 3: ");
let Number1 = parseInt(Num1);
let Number2 = parseInt(Num2);
let Number3 = parseInt(Num3);

console.log("Results For Arithmatic Operations Are: ");

let operation1  = (Number1 + (Number2 * Number3));
console.log("Resut For Operation 1: "+operation1);

let operation2 = ((Number1 % Number2) * Number3);
console.log("Resut For Operation 2: "+operation2);

let operation3 =  ((Number1 / Number2) + Number3);
console.log("Resut For Operation 3: "+operation3);

let operation4 = ((Number1 * Number2) + Number3);
console.log("Resut For Operation 4: "+operation4);


//MAXIMUM NUMBER
console.log("FINDING MAXIMUM NUMBER");
if(operation1 > operation2 && operation1 > operation3 && operation1 > operation4){
    console.log("Maximum Number Is ",+operation1);
}
else if(operation2 > operation1 && operation2 > operation3 && operation2 > operation4)
{
    console.log("Maximum Number Is ",+operation2);
}
else if(operation3 > operation1 && operation3 > operation2 && operation3 > operation4)
{
    console.log("Maximum Number Is ",+operation3);
}
else 
{
    console.log("Maximum Number Is ",+operation4);
}


//MINIMUM NUMBER
console.log("FINDING MINIMUM NUMBER");
if(operation1 < operation2 && operation1 < operation3 && operation1 < operation4){
    console.log("Minimum Number Is ", operation1);
}
else if(operation2 < operation1 && operation2 < operation3 && operation2 < operation4)
{
    console.log("Minimum Number Is ", operation2);
}
else if(operation3 < operation1 && operation3 < operation2 && operation3 < operation4)
{
    console.log("Minimum Number Is ", operation3);
}
else 
{
    console.log("Minimum Number Is ", operation4);
}
