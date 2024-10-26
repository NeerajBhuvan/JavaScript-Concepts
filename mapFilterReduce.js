//Map
let arr = [10, 20, 30, 40, 50];

let doubleArrow = arr.map((el) => el * 2);
console.log(doubleArrow);

// let doubleNormal = arr.map(function (el) {
//     return el * 2;
// });
// console.log(doubleNormal);

//Filter
let filterDouble = doubleArrow.filter((val) => val > 50);
console.log(filterDouble);

//map&filter
let result = arr.map((el) => el + 10).filter((el) => el > 30);
console.log(result + " Filter and Map Result");

//Reduce
let addArrReduce = arr.reduce( function (acc, curr) {
    return acc + curr;
}, 0);

console.log("Reduce Added Array: ", addArrReduce);

//ForEach
let increTen = [];
let addArrForEach = arr.forEach((val) => increTen.push(10 + val));
console.log(increTen);



let nameData = [{
    name: "Neeraj",
    age: 23
}, {
    name: "Varsha",
    age: 25
}, {
    name: "Bhuvi",
    age: 23
}];

let fetchAgeData = nameData.reduce((acc, curr) => {
    console.log(acc);
    if(acc[curr.age]) {
        console.log(acc[curr.age]);
        acc[curr.age] = ++ acc[curr.age];
    }else {
        acc[curr.age] = 1; 
    }
    return acc;
}, {});
console.log(fetchAgeData);

let filterAge = nameData.reduce((acc, curr) => {
    if (curr.age >= 25) {
        acc.push(curr.name)
    }
    return acc;
}, []);
console.log(filterAge);

