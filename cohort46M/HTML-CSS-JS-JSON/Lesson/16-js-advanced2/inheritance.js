const human = {
    hobby: 'chess',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith'
}

console.log(john);
console.log(john.hobby);
john.__proto__ = human;
console.log(john);
console.log(john.hobby);

john.hobby = 'cannabis';
console.log(john.hobby);
console.log(john.__proto__);
console.log(john.fullName());

console.log('===== Constructor =====');
// Person.prototype = human;
Person.prototype.fullName = human.fullName;
Person.prototype.hobby = 'JS';
console.log(Person.prototype.constructor);
console.log(Person.prototype.constructor === Person);

const peter = new Person('Peter', 'Jackson');
const mary = new Person('Mary', 'Smith');
console.log(peter);
console.log(mary);
// peter.__proto__ = human;
// mary.__proto__ = human;
console.log(peter.fullName());
console.log(mary.fullName());
console.log(peter.hobby);
console.log(mary.hobby);

console.log('===== Arrays =====');
Array.prototype.printArray = function() {
    for (let i = 0; i < this.length; i++) {
        console.log(this[i]);
    }
    console.log('==========');
}

const numbers = [2, 3, 5, 7, 11, 13];
console.log(numbers);
numbers.printArray();

const arr = new Array('one', 'two', 'three');
console.log(arr);
arr.printArray();

console.log('===== for-in Arrays =====');
for (const i in arr) {
    console.log(arr[i]);
}

// Constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}


