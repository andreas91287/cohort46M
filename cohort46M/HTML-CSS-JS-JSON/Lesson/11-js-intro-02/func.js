// const subtract = function (a, b) {
//     return a - b;
// }
const subtract = (a, b) => a - b;

// const multiply = function (a, b) {
//     return a * b;
// }

// const division = function (a, b) {
//     return a / b;
// }

let res = subtract(5, 3);
console.log(`subtract = ${res}`);
res = add(5, 3);
console.log(`sum = ${res}`);
console.log(typeof subtract);
console.log(typeof add);
console.log(subtract);
console.log(add);
const fn1 = subtract;
console.log(typeof fn1);
console.log(fn1);
res = fn1(12, 7);
console.log(`subtract = ${res}`);
const fn2 = add;
console.log(typeof fn2);
console.log(fn2);
res = fn2(12, 7);
console.log(`sum = ${res}`);
console.log('==========');
res = universalFunction(5, 7, subtract, add);
console.log(`result = ${res}`);
res = universalFunction(2, 10, (a, b) => a / b, (a, b) => a * b);
console.log(`result = ${res}`);
res = universalFunction(2, 10, 'func1', 'func2');
console.log(`result = ${res}`);


// callback
function universalFunction(a, b, fn1, fn2) {
    if (typeof fn1 !== 'function' || typeof fn2 !== 'function') {
        return 'ERROR';
    }
    if (a > b) {
        return fn1(a, b);
    } else {
        return fn2(a, b);
    }
}

function add(a, b) {
    return a + b;
}
