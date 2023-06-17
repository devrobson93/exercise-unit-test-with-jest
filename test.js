// import the function sum from the app.js file
const { sum, fromDollarToYen, fromYenToPound, fromEuroToDollar } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 138.88 yen", function(){
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(1)).toBe(138.88); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One yen should be 0.0060 pounds", function(){
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(1)).toBe(0.0060); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})