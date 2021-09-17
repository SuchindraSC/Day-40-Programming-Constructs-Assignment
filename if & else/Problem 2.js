readlineSync = require("readline-sync");
readline = require("readline-sync");

let a = readlineSync.question("Enter The Date: ");
console.log("The Date Is "+a);
let b = readline.question("Enter The Month: ");
console.log("The Month Is "+b);

if((a >= 20) && (a <= 30)){
    if(b == "March"){
      console.log("True");
    }
    else{
        console.log("False");
    }
}
else if((a >= 1) && (a <= 30)){
    if(b == "April"){
        console.log("True");
    }
    else{
        console.log("False");
    }
}
else if((a >= 1) && (a <= 31)){
    if(b == "May"){
        console.log("True");
    }
    else{
        console.log("False");
    }
}
else if((a >= 1) && (a <= 20)){
    if(b == "June"){
        console.log("True");
    }
    else{
        console.log("False")
    }
}
else{
    console.log("False");
}




