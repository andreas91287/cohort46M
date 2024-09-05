const arr = ['one', 'two', 'threE', 'eight', 'tHree', 'three', 'six'];
console.log('===== indexOf =====');
let res = arr.indexOf('three');
console.log(res);
console.log('===== lastIndexOf =====');
res = arr.lastIndexOf('three');
console.log(res);
console.log('===== includes =====');
res = arr.includes('two');
console.log(res);
res = arr.includes('nine');
console.log(res);
console.log('===== findIndex =====');
res = arr.findIndex((e, index) => index > 2 && e.toLocaleLowerCase() === 'three');
console.log(res);
const predicateLength3 = (e, index) => index >= 2 && e.length === 3;
res = arr.findIndex(predicateLength3);
console.log(res);
const persons = [
    {
        name: 'Peter',
        age: 23
    },
    {
        name: 'John',
        age: 28
    },
    {
        name: 'Wolf',
        age: 26
    },
    {
        name: 'Helga',
        age: 23
    }
];

res = persons.findIndex((p, i) => i >= 1 && p.age < 25);
console.log(res);
console.log('===== forEach =====');
persons.forEach((p, i) => console.log(`${i + 1}. ${p.name}, age: ${p.age}`));
// const printPerson = (p, i) => console.log(`${i + 1}. ${p.name}, age: ${p.age}`);
// for (let i = 0; i < persons.length; i++) {
//     printPerson(persons[i], i);
// }

// res = [];
// persons.forEach(p => {
//     if (p.age < 25) {
//         res.push(p);
//     }
// });
// console.log(res);

console.log('===== filter =====');
res = persons.filter(p => p.age < 25);
console.log(res);

console.log('===== map =====');
res = persons.map((p, i) => document.createTextNode(`${i + 1}. ${p.name}, age: ${p.age}`));
console.log(res);
res = persons.map((p, i) => {
    const paragraph = document.createElement('p');
    paragraph.append(`${i + 1}. ${p.name}, age: ${p.age}`);
    return paragraph;
});
console.log(res);
persons.filter(p => p.age < 25)
    .map((p, i) => `${i + 1}. ${p.name}, age: ${p.age}`)
    .map(s => document.createTextNode(s))
    .map(t => {
        const p = document.createElement('p');
        p.appendChild(t);
        return p;
    })
    .forEach(p => document.body.append(p));

console.log('===== reduce =====');
const numbers = [5, 9, 11, 2, 7, 13, 2];
res = numbers.reduce((accum, el) => accum + el, 0);
console.log(res);
res = numbers.reduce((accum, el) => accum * el, 1);
console.log(res);
res = numbers.reduce((accum, el) => accum + el, '');
console.log(res);
console.log('===== apply reduce =====');
res = persons.reduce((accum, p) => accum + p.age, 0) / persons.length;
console.log(res);
res = numbers.reduce((max, n) => n > max ? n : max);
console.log(res);
res = persons.reduce((max, p) => p.age > max ? p.age : max);
console.log(res.age);
res = persons.reduce((min, p) => p.age < min ? p.age : min);
console.log(res.age);
console.log('===== sort =====');
numbers.sort((a, b) => a - b);
console.log(numbers);
persons.sort((p1, p2) => p2.age - p1.age);
console.log(persons);



