//scope3
function a() {   
    let b = 22;  
    //scope2  
    c();
    function c(){
        //scope1
        console.log (b);
    }
}
var b = 10;
a();

function hello() {
    h = 10;
    function helloInner() {
        //var h = 20;
        //var g = 12;
        console.log(h);
    }
    helloInner();
}
let h = 5;
//let h = 23; //not allowed to redeclare (let/Const)
hello();

let u = 10;
function diffKey() {
    if (u) {
        var r = 20; //can be able to access within a curly braces
    }
    console.log(r); //cannot access outside a scope (let/Const)
}
diffKey();