readlineSync = require("readline-sync");

console.log("Select Option For Conversion Operation: \n1. Feet To Inche.\n2. Feet To Meter.\n3. Inch To Feet.\n4. Meter To Feet.");
let option = readlineSync.question("Enter Your Option: ");
options = parseInt(option);
switch(options){
    case 1:
        console.log("Feet To Inch");
        let Foot = readlineSync.question("Enter The Feet: ");
        Feet = parseInt(Foot);
        Inch = Feet * 12;
        return console.log("Conversion Of Feet To Inch Is: "+Inch);
    case 2:
        console.log("Feet To Meter");
        let Foots = readlineSync.question("Enter The Feet: ");
        Feets = parseInt(Foots);
        Meter = Feets / 3.28084;
        return console.log("Conversion Of Feet To Meter Is: "+Meter);
    case 3:
        console.log("Inch To Feet");
        let Inches = readlineSync.question("Enter The Inch: ");
        inch = parseInt(Inches);
        feet = inch / 12;
        return console.log("Conversion Of Inch To Feet Is: "+feet);
    case 4:
        console.log("Meter To Feet");
        let Meters = readlineSync.question("Enter The Meter: ");
        Meter = parseInt(Meters);
        foot = Meter * 3.28084;
        return console.log("Conversion Of Feet To Inch Is: "+foot);
    default:
        return console.log("INVALID OPTION SELECTED. PLEASE TRY AGAIN USING VALID OPTIONS");
}