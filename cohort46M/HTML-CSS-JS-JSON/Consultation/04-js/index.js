// console.log('Hello JS');

// var creating 
let dog = "Sharik";
dog = "Tuzik";
dog = 12; // type changing

// Primitive types
// Strings

let str1 = "string";
let str2 = 'string';

let str3 = "13";

let str4 = str1 + " " + str2;
console.log(str4);

// 2 Number

let num1 = 9;
let num2 = 9.6;

// bigInt
let num3 = 1239n;

// Booleran
let isDrunk = true;

// if (isDrunk) {
//     console.log('Your drunk!');
// }
const result = isDrunk ? 'You drunk!' : 'You not drunk!';
console.log(result);

// undefined
let str5;
str5 = 12;
console.log(str5);

// 6 null
let = empty = null;
console.log(empty)

// 7 symbol
let s1 = Symbol("something");


// converting
let str7 = '' + 9;
console.log(typeof str7);

const num4 = 10;
let str8 = String(num4);

const res = 9 + 12 + "5"; // "215"
console.log(res);
// res = "5" + 9 + 12; // "5912"
console.log(res);

const num6 = Number("117");
const num7 = Number("129*#");
console.log(typeof num7);

// Number to Boolean
const res4 = Boolean(9); // True
const res5 = Boolean(0);
const test5 = Boolean(-1);
console.log(test5);

// String to Boolean
const res6 = Boolean("");
const res7 = Boolean(" ");
const res8 = Boolean(null);
const res9 = Boolean(undefined);

// (nicht) strenge Gleichung 
console.log(9 === "9");
console.log(9 == "9");

console.log(('b' + 'a' + + 'a' + 'a').toLowerCase);


