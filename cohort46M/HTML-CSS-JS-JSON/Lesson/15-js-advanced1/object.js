const person = {
    firstName: 'John',
    lastName: 'Smith',
    salary: 3500,
    fullname: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    address: {
        city: 'Hamburg',
        street: 'Hauptstraße',
        building: 3
    },
    salary: 3600
}

console.log(person.salary);
console.log('===== Object.keys =====');
let arr = Object.keys(person);
console.log(arr);
arr.forEach(item => console.log(item));
console.log('===== Object.values =====');
arr = Object.values(person);
console.log(arr);
arr.forEach(item => console.log(item));
console.log('===== Object.entries =====');
arr = Object.entries(person);
console.log(arr);
arr.forEach(item => console.log(item));
console.log(arr[2][1]);
console.log(arr[1][0]);

