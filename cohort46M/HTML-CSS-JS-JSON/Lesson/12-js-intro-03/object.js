const john = {
    firstname: 'John',
    lastname: 'Smith',
    age: 27,
    fullname: function () {
        return `${this.firstname} ${this.lastname}`;
    }
}
console.log(typeof john);
console.log(john.firstname);
console.log(john.lastname);
console.log(john.age);
console.log(john.fullname());
john.age = 28;
console.log(john.age);
console.log(john);

const peter = {
    firstname: 'Peter',
    lastname: 'Jackson',
    age: 34
}
console.log(peter);
peter.fullname = function () {
    return `${this.firstname} ${this.lastname}`;
}
console.log(peter.fullname());
console.log(peter.id);
// peter.id = 2000;
peter['id'] = 2000;
console.log(peter.id);
console.log(peter.hobby);

let info = 'age';
// console.log(peter.info);
console.log(peter[info]);
printObject(peter);
printObject(john);
peter.hobby = 'chess';
console.log(peter.hobby);
delete peter.hobby;
console.log(peter.hobby);
console.log('id' in john);
console.log('id' in peter);

const mary = new Person(3000, 'Mary', 'Smith', '19');
console.log(mary);
console.log(mary.fullname());
mary.hobby = 'cooking';
printObject(mary);
const persons = [mary, peter, new Person(4000, 'Rabindranate', 'Anand', 33),
    {
        firstname: 'John',
        lastname: 'Smith',
        age: 27,
        fullname: function () {
            return `${this.firstname} ${this.lastname}`;
        },
        id: 1000
    }
];
console.log(persons.length);

for (let i = 0; i < persons.length; i++) {
    console.log(persons[i]);    
}

function printObject(obj) {
    console.log('==========');
    for (let key in obj) {
        if (typeof obj[key] === 'function') {
            console.log(`${key} -> ${obj[key]()}`);
        } else {
            console.log(`${key} -> ${obj[key]}`);
        }
    }
    console.log('==========');
}

function Person(id, firstname, lastname, age) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = +age; // + converts into number
    this.fullname = function () {
        return `${this.firstname} ${this.lastname}`;
    }
}

