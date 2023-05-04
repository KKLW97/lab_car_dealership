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

// return an array of each cars manufacturer
Dealership.prototype.returnManufacturer = function(){
    const manufacturer = this.carsInStock.map(car => car.manufacturer);
    return manufacturer;
    // let manufacturer = this.carsInStock.map(function(Car) {return Car[manufacturer]});

}

// return cars by manufacturer
// Dealership.prototype.returnCarByManufacturer = function() {
//     for(Car in carsInStock){
//         if(Car.manufacturer === manufacturer){
//             return
//         }
//     }
// }

const dealership1 = new Dealership("BNTA cars", 200);
const car1 = new Car("mercedes", 55000, "petrol");
const car2 = new Car("toyota", 55000, "petrol");
dealership1.addCarToStock(car1);
dealership1.addCarToStock(car2);

// stock = dealership1.countCarsInStock()
// console.log(stock);
console.log(dealership1.returnManufacturer());
module.exports = Dealership;