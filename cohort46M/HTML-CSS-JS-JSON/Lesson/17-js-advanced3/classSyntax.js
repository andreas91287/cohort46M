class Person {
    constructor(id, firstName, lastName, birthDate) {
        this._id = id;                                  // _id - private id
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthDate = new Date(birthDate);
    }

    get id() {
        return this._id;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get birthDate() {
        return this._birthDate;
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }

    get age() {
        const ageDiffMs = (new Date()) - this._birthDate;
        const ageDate = new Date(ageDiffMs);
        return (ageDate.getUTCFullYear() - 1970);
    }

    fullName = function () {
        return `${this._firstName} ${this._lastName}`;
    }
}

class Employee extends Person {
    constructor(id, firstName, lastName, birthDate, salary) {
        super(id, firstName, lastName, birthDate);
        this._salary = salary;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        if (salary > this._salary) {
            this._salary = salary;
        }
    }
}

class Company {
    constructor() {
        this._employees = [];
    }

    get employees() {
        return [...this._employees];
    }

    addEmployee(employee) {
        const index = this._employees.findIndex(({id}) => id === employee.id);
        if (index < 0) {
            this._employees.push(employee);
        }
        return index < 0;
    }

    removeEmployee(id) {
        const index = this._employees.findIndex(e => e.id === id);
        if (index >= 0) {
            this._employees.splice(index, 1);
        }
        return index >= 0;
    }

    get size() {
        return this._employees.length;
    }
}

const john = new Person(1000, 'John', 'Smith', '2001-04-08');
console.log(john);
console.log(john._id);
console.log(john.fullName());
console.log(john.id);
console.log(john.firstName);
john.firstName = 'Johny';
console.log(john.firstName);
console.log(john.age);

const peter = new Employee(2000, 'Peter', 'Jackson', '2003-02-24', 3500);
console.log(peter);
console.log(peter.salary);
peter.salary = 3000;
console.log(peter.salary);
peter.salary = 3700;
console.log(peter.salary);

console.log('===== Company =====');
const firm = new Company();
firm.addEmployee(peter);
const mary = new Person(3000, 'Mary', 'Smith', '2002-03-24', 3600);
firm.addEmployee(mary);
// firm._employees.push(mary);
firm.employees.forEach(e => console.log(e));
console.log(firm.size);
firm.employees.length = 1;
firm.employees.forEach(e => console.log(e));
console.log(firm.size);




