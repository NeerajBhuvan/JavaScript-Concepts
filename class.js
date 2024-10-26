class Product {
    constructor(name, price) {
        this.name = name,
        this.price = price
    }

    displayProduct() {
        return `Product name is ${this.name} and it cost without GST is Rs.${this.price}`
    }

    addTax(tax) {
        return this.price + tax;
    }
}

const product1 = new Product("Shirt", 450.10);

console.log(product1);
console.log(product1.displayProduct());
const withTax = product1.addTax(5.20);
console.log(`The product with GST is Rs.${withTax}`);