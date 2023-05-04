const Dealership = require('./dealership');
const Car = require('./car');
const dealership1 = new Dealership("BNTA cars", 200);

describe("dealership has properties", () => {
    test('dealership has name', () =>{
        expected = "BNTA cars";
        actual = dealership1.name;
        expect(actual).toBe(expected);
    });

    test('dealership has max cars', () => {
        expected = 200;
        actual = dealership1.maxCars;
        expect(actual).toBe(expected);
    });

    test('dealership has no stock to start', () => {
        expected = 0;
        actual = dealership1.carsInStock.length;
        expect(actual).toBe(0);
    });
});

describe('dealership can add car to stock', () => {
    test('can add car to stock', () => {
        const car1 = new Car("mercedes", 55000, "petrol");
        dealership1.addCarToStock(car1);
        expected = [car1];
        actual = dealership1.carsInStock;
        expect(actual).toStrictEqual(expected);
    });
});

describe('dealership can find all manufacturers', () => {
    test('can find all manufacturers', () => {
        const car2 = new Car("toyota", 75000, "electric");
        dealership1.addCarToStock(car2);
        expected = ["mercedes", "toyota"];
        actual = dealership1.returnManufacturer();
        expect(actual).toEqual(expected);
    });
});

describe('dealership can find all cars by manufacturer', () => {
    test('can find all cars by manufacturer', () => {
        const car1 = new Car("mercedes", 55000, "petrol");
        expected = [car1];
        actual = dealership1.returnCarByManufacturer("mercedes");
        expect(actual).toEqual(expected);
    });
});

describe('dealership can find total value of stock', () => {
    test('can find total value of stock',() => {
    expected = 130000;
    actual = dealership1.findTotalValue();
    expect(actual).toEqual(expected);
    });
});