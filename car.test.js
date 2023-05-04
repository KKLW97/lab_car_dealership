const Car = require('./car');
const car1 = new Car("mercedes", 55000, "petrol");

describe('car has properties', () => {
    test('car has manufacturer', () => {
        expected = 'mercedes';
        actual = car1.manufacturer;
        expect(actual).toBe(expected);
    });

    test('car has price', () => {
        expected = 55000;
        actual = car1.price;
        expect(actual).toBe(expected);
    });

    test('car has engine type',  () => {
        expected = "petrol";
        actual = car1.engineType;
        expect(actual).toBe(expected);
    });
});