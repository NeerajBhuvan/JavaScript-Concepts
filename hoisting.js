//Variable Hoisting
x = 10;
console.log(x);
var x;

//Function Hoising
output(x);
function output(val) {
    console.log("My Name is Neeraj " + val)
}