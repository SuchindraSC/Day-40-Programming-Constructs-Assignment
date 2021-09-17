let Num1 = Math.floor(Math.random() * (999 - 100 + 1) + 100) % 1000;
let Num2 = Math.floor(Math.random() * (999 - 100 + 1) + 100) % 1000;
let Num3 = Math.floor(Math.random() * (999 - 100 + 1) + 100) % 1000;
let Num4 = Math.floor(Math.random() * (999 - 100 + 1) + 100) % 1000;
let Num5 = Math.floor(Math.random() * (999 - 100 + 1) + 100) % 1000;
//Finding Mximum Number
if(Num1 > Num2 && Num1 > Num3 && Num1 > Num4 && Num1 > Num5){
    console.log("The Max Number Is Number 1: "+Num1);
}
else if(Num2 > Num1 && Num2 > Num3 && Num2 > Num4 && Num2 > Num5){
    console.log("The Max Number Is Number 2: "+Num2);
}
else if(Num3 > Num1 && Num3 > Num2 && Num3 > Num4 && Num3 > Num5){
    console.log("The Max Number Is Number 3: "+Num3);
}
else if(Num4 > Num1 && Num4 > Num2 && Num4 > Num3 && Num4 > Num5){
    console.log("The Max Number Is Number 4: "+Num4);
}
else{
    console.log("The Max Number Is Number 5: "+Num5);
}

//Finding Minimum Number
if(Num1 < Num2 && Num1 < Num3 && Num1 < Num4 && Num1 < Num5){
    console.log("The Min Number Is Number 1: "+Num1);
}
else if(Num2 < Num1 && Num2 < Num3 && Num2 < Num4 && Num2 < Num5){
    console.log("The Min Number Is Number 2: "+Num2);
}
else if(Num3 < Num1 && Num3 < Num2 && Num3 < Num4 && Num3 < Num5){
    console.log("The Min Number Is Number 3: "+Num3);
}
else if(Num4 < Num1 && Num4 < Num2 && Num4 < Num3 && Num4 < Num5){
    console.log("The Min Number Is Number 4: "+Num4);
}
else{
    console.log("The Min Number Is Number 5: "+Num5);
}