function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multi(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function arthiOpers(cb, a, b) { //Higher Order Function
    return function () {
        console.log(`The result is ${cb(a, b)}`);
    }
}


let addition = arthiOpers(sum, 10, 2); //callback Function
addition();
let subtraction = arthiOpers(sub, 10, 2);
subtraction();
let multiplication = arthiOpers(multi, 10, 2);
multiplication();
let division = arthiOpers(divide, 10, 2);
division();

//HOF
const values = [2, 4, 6, 8];

function area(radius) {
    return Math.PI * radius * radius;
}

function circumference(radius) {
    return 2 * Math.PI * radius;
}

function diameter(radius) {
    return 2 * radius;
}

Array.prototype.calculate = function (logic) {
    let output = this.map((val) => {
        return logic(val);
    })
    return output;
}

console.log("The result of Area: ", values.calculate(area));
console.log("The result of Circumference: ", values.calculate(circumference));
console.log("The result of Diameter: ", values.calculate(diameter));

