let arr = [1,2,3,4,5];

for (el of arr)  { //For of used for array
    console.log(el + 10);
}

function SampleObj(name, age) {
    this.name = name,
    this.age = age
}

const obj1 = new SampleObj("Neeraj", 23);
console.log(obj1);

for (obj in obj1) { //For in used for object
    console.log(`My ${obj} is ${obj1[obj]}`)
}



