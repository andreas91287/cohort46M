let age = 50;
console.log('===== destructuring array ======');
const arr = [2, 3, 5, 7, 11];
let [a, b, ...c] = arr;
console.log(a, b);
console.log(c);

console.log('===== swap ======');
a = 10;
b = 15;
console.log(a, b);
[b, a] = [a, b];
console.log(a, b);

console.log('===== destructuring object ======');
const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 34,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    'my hobby': 'chess',
    address: {
        city: 'Berlin',
        street: 'Hauptstraße',
        building: 10
    }
}
console.log(person['my hobby']);

let {firstName, lastName, age: personsAge, address: {city, street}, 'my hobby': hobby, ...rest} = person;
console.log(firstName);
console.log(lastName);
console.log(city, street);
console.log(personsAge);
console.log(hobby);
console.log(rest);
personInfo(person);

function personInfo({lastName, age}) {
    console.log(`${lastName} - ${age}`);
}


