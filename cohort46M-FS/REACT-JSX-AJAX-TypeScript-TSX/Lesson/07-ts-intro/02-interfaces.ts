interface Address {
    city: string,
    street: string,
    building: number,
}

interface Person {
    readonly id: number
    firstName: string
    lastName: string
    address: Address,
    fullName: (greeting: string) => string
}

const john: Person = {
    id: 1,
    firstName: 'John',
    lastName: 'Smith',
    address: {
        city: 'Bremen',
        street: 'Pappelstraße',
        building: 10
    },
    fullName: function(greeting: string) {
        return `${greeting} ${this.firstName} ${this.lastName}`
    }
}

console.log(john.fullName('Mr.'));
console.log(john.id);
// john.id = 10;

const peter: Person = {
    id: 2,
    firstName: 'Peter',
    lastName: 'Jackson',
    address: {
        city: 'Bremen',
        street: 'Pappelstraße',
        building: 10
    },
    fullName: function(greeting: string) {
        return `${greeting} ${this.firstName} ${this.lastName}`
    }
}

console.log(peter.fullName('Mr.'));
console.log(peter.id);
peter.id = 20;
console.log(peter.id);

// Casting
const peter1 = {...peter} as Person
console.log(peter1);
// peter1.id = 2;
const peter2 = <Person> peter;
console.log(peter2);



