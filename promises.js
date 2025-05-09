console.log("Hello");

let calculation = new Promise((resolve, reject) => {
    resolve(3+5);
});

console.log(calculation);
console.log(calculation + 1);

calculation.then(result => {
    console.log(result + 1);
})
.catch(result => {
    console.log("Caught the calcuation");
})


let rejection = new Promise((resolve, reject) => {
    // throw new Error("This is a deliberate error. Do not be alarmed.");
    reject("Rejection :(");
})

// console.log(rejection)
rejection
.then(result => {
    console.log("Sucess!");
})
.catch(result => {
    console.log(result);
})
// console.log()


let asyncCalculation = new Promise((resolve, reject) => {
    resolve(5*25);
});

async function awaitResult() {
    let result = await asyncCalculation;
    console.log(result);
}
awaitResult();
console.log("World");