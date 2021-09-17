readlineSync = require("readline-sync");
let Number = readlineSync.question("Enter The Number: ");

if(Number == 1)
{
    console.log("UNIT");
}
else if(Number == 10)
{
    console.log("TEN");
}
else if(Number == 100)
{
    console.log("HUNDRED");
}
else if(Number == 1000)
{
    console.log("THOUSAND");
}
else if(Number == 10000)
{
    console.log("TEN THOUSAND");
}
else if(Number == 100000)
{
    console.log("HUNDRED THOUSAND");
}
else if(Number == 1000000)
{
    console.log("MILLION");
}
else if(Number == 10000000)
{
    console.log("TEN MILLION");
}
else if(Number == 100000000)
{
    console.log("HUNDRED MILLION");
}
else if(Number == 1000000000)
{
    console.log("ONE BILLION");
}
else
{
    console.log("INVALID INPUT");
}