readlineSync = require("readline-sync");
let Number = readlineSync.question("Enter The Number: ");

if(Number == 1)
{
    console.log("SUNDAY");
}
else if(Number == 2)
{
    console.log("MONDAY");
}
else if(Number == 3)
{
    console.log("TUESDAY");
}
else if(Number == 4)
{
    console.log("WEDNESDAY");
}
else if(Number == 5)
{
    console.log("THURSDAY");
}
else if(Number == 6)
{
    console.log("FRIDAY");
}
else if(Number == 7)
{
    console.log("SATURDAY");
}
else
{
    console.log("INVALID INPUT");
}