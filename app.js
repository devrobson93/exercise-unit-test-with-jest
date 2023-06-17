// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}
// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

let oneDollarIs = {
    "JPY": 138.88
}

let onYenIs ={
    "GBP": 0.0060
}

const fromDollarToYen=(usd)=>{
    return usd*oneDollarIs.JPY
}

const fromEuroToDollar=(eu)=>{
    return eu*oneEuroIs.USD
}

const fromYenToPound=(jpy)=>{
    return jpy*onYenIs.GBP
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };

