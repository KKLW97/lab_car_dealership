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
}

// return cars by manufacturer
Dealership.prototype.returnCarByManufacturer = function(manufacturer) {
    // const results = [];
    // for(const car in this.carsInStock){
    //     if(car.manufacturer === manufacturer){
    //         results.push(car);
    //     };
    // };
    let newArray = this.carsInStock.filter(function(car)
    { 
        return car.manufacturer === manufacturer;
    });  
    return newArray
};

// find total value of all cars in stock
Dealership.prototype.findTotalValue = function(){
    const price = this.carsInStock.map(car => car.price);
    const total = price.reduce((accumulator, price) => accumulator + price);
    return total;

    // const total = this.carsInStock.reduce((accumulator, car))
};

const dealership1 = new Dealership("BNTA cars", 200);
const car1 = new Car("mercedes", 55000, "petrol");
const car2 = new Car("toyota", 55000, "petrol");
const car3 = new Car("mercedes", 55000, "petrol");

dealership1.addCarToStock(car1);
dealership1.addCarToStock(car2);
dealership1.addCarToStock(car3);
// dealership1.returnCarByManufacturer("mercedes");
// stock = dealership1.countCarsInStock()
// console.log(stock);
// console.log(dealership1.returnCarByManufacturer("mercedes"));
console.log(dealership1.findTotalValue());
module.exports = Dealership;