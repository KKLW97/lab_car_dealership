const Car = require('./car');

const Dealership = function(name, maxCars){
    this.name = name;
    this.maxCars = maxCars;
    this.carsInStock = [];
}
// don't use arrow function for defining prototype functions

// count cars in stock
Dealership.prototype.countCarsInStock = function () {
    return this.carsInStock.length;
}

// add a car to stock
Dealership.prototype.addCarToStock = function (car) {
    this.carsInStock.push(car);
}

const dealership1 = new Dealership("BNTA cars", 200);
const car1 = new Car("mercedes", 55000, "petrol");
dealership1.addCarToStock(car1);
// stock = dealership1.countCarsInStock()
// console.log(stock);
console.log(dealership1.carsInStock);
module.exports = Dealership;