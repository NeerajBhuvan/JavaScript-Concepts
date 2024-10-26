// function a() {
//     let b = 10; //closer variable
//     function c(){
//         console.log(b);
//     }
//     b = 100;
//     return c;
// }
// let z = a();
// z();

// function sample() {
//     let a = 10;
//     setTimeout(function () {
//         console.log("TimeOut after 3 sec...");
//         function c(){
//             console.log(a);
//         }
//         c();
//     }, 3000);
//     console.log("Neeraj Code");
// }
// sample();

var c = 30;
function outest() {
    function outer(b) {
        function inner() {
            console.log(a, b, c);
        }
        let a = 10;
        return inner;
    }
    return outer;
}

let close = outest()(20);
console.log(outest());
console.log(outest()(20));
//console.log(close());
close();

//Example 2

function a() {
    let var1 = 10;
    return function b() {
        console.log(var1);
    }
}

let aVal = a();
aVal();

//Realtime Example

function counter() {
    let count = 0;
    return () => {
        count++;
        console.log("Current Count Value - " + count);
    }
}

let closerCount = counter();
closerCount();

closerCount();


function hello1() {
    let var2 = 20;
    return () => {
        let var3 = 30;
        console.log(var1, var2, var3);
    }
}

let var1 = 10;
let callHello1 = hello1();
callHello1();

function CounterVal() {
    let countVal = 0;
    return () => {
        countVal++;
        console.log(`Counter Value is ${countVal}`);
    }
}
let checkCountedValue = CounterVal();
checkCountedValue();
checkCountedValue();
