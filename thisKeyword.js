//Normal Function - refers to object that is currently calling the function
// let employee1 = {
//     name: "Neeraj",
//     salary: 15000,
//     calculatedSalaryWithBonus: function(Bonus) {
//         console.log(`${this.name} Salary with bonus is ${this.salary + Bonus}`);
//     }
// }

// employee1.calculatedSalaryWithBonus(2000);

//Arrow Function - based on the scope the arrow function is defined within
// ename = "Deepthi";
// esalary = 19000;
// function calculatedSalary() {
//     console.log(`${this.ename} Salary is ${this.esalary}`);
// }

// calculatedSalary();

let employee1 = {
    name: "Neeraj",
    salary: 15000
}
let employee2 = {
    name: "Varsha",
    salary: 18000
}

let calculatedSalaryWithBonus = function(Bonus) {
    console.log(`${this.name} Salary with bonus is ${this.salary + Bonus}`);
}

//call();
console.log("\nCall Method:")
calculatedSalaryWithBonus.call(employee1, 3000);
calculatedSalaryWithBonus.call(employee2, 2000);

//apply();
console.log("\nApply Method:")
calculatedSalaryWithBonus.apply(employee1, [3000]);
calculatedSalaryWithBonus.apply(employee2, [2000]);

//bind();
console.log("\nBind Method:")
let calculatedBonus1 = calculatedSalaryWithBonus.bind(employee1);
calculatedBonus1(2000);

let calculatedBonus2 = calculatedSalaryWithBonus.bind(employee2);
calculatedBonus2(2000);