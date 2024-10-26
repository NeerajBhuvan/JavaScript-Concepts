class Animal {
    alive = true;

    eat() {
        console.log(`${this.name} can able to eat`);
    }

    sleep() {
        console.log(`${this.name} can able to sleep`);
    }
}

class Rabbit extends Animal {
    name = "Rabbit";

    run() {
        console.log(`${this.name} will Run`);
    }
}

class Fish extends Animal {
    name = "Fish";

    swim() {
        console.log(`${this.name} will Swim`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();

console.log(rabbit);
console.log(rabbit.alive);
rabbit.eat(); //inherites properties and methods for existing animal class
rabbit.sleep(); //inherites properties and methods for existing animal class
rabbit.run();

console.log(fish);
console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();
