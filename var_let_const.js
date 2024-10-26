// let input = prompt("Enter a number: ");
// console.log(input);

console.log(a);
var a = 10;
if(a) {
    var b = 11;
    let c = 12;
    const d = 13;
}
console.log(b); // accessible outside a scope
//console.log(d); // let/const are not accessible outside block scope 

function check() {
    let m = n = 13
    console.log(a1);
    var a1 = 15;
    let b1 = 12;
    const c1 = 13;
    function b() {
        console.log(a1, b1, c1)
        var a1 = 25;
    }
    return b;
}

console.log(n);
let callFunca = check();
callFunca();
