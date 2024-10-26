function Car(model, year, color) {
    this.model = model,
    this.year = year,
    this.color = color
    this.advertise = function() {
        return `This is ${model} car made in year ${year}!!!`;
    }
}

const car1 = new Car("Audi", 2024, "Red");
console.log(car1);
console.log(car1.advertise());

function counter() {
    let count = 0;
    this.incrementCount = () => {
        count++;
        console.log(count)
    }
    this.decrementCount = () => {
        count--;
        console.log(count)
    }
}
let checkCounter = new counter();
checkCounter.incrementCount();
checkCounter.incrementCount();
checkCounter.incrementCount();
checkCounter.decrementCount();
