console.log('===== Spread Arrays =====');
const arr1 = [2, 3, 5];
const arr2 = [7, 11];
const arr3 = [...arr1, 0, ...arr2, 17, 19];
console.log(arr3);
const arr1Clone = [...arr1];
console.log(arr1Clone);
console.log(arr1Clone === arr1);
let res = Math.min(6, 2, 8, 1, 4);
console.log(res);
res = Math.min(...arr3);
console.log(res);

console.log('===== Spread Object =====');
const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 34,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    hobby: 'chess',
    address: {
        city: 'Berlin',
        street: 'Hauptstraße',
        building: 10
    }
}
// const personClone = person;
// console.log(personClone === person);
const job = {company: 'IBM', position: 'developer', salary: 6500}
const personClone = {...person};
console.log(personClone === person);
console.log(personClone);
console.log(personClone.address === person.address);
const newPerson = {...person, salary: 7000, ...job, gender: 'male'};
console.log(newPerson);
console.log('===== Legacy object clone =====');
const legacyClone = Object.assign({}, person);
console.log(legacyClone);
console.log(legacyClone === person);
const newPersonLegacy = Object.assign({}, person, {salary: 7000}, job, {gender: 'male'});
console.log(newPersonLegacy);

