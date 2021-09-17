readlineSync = require("readline-sync");
let Number = readlineSync.question("Enter The Number: ");

if(Number == 1)
{
    console.log("ONE");
}
else if(Number == 2)
{
    console.log("TWO");
}
else if(Number == 3)
{
    console.log("THREE");
}
else if(Number == 4)
{
    console.log("FOUR");
}
else if(Number == 5)
{
    console.log("FIVE");
}
else if(Number == 6)
{
    console.log("SIX");
}
else if(Number == 7)
{
    console.log("SEVEN");
}
else if(Number == 8)
{
    console.log("EIGHT");
}
else if(Number == 9)
{
    console.log("NINE");
}
else
{
    console.log("INVALID INPUT");
}