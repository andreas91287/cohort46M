// Задание 1: Создание и использование классов
// Описание задания:
// Создайте класс Person, который будет содержать имя (name) и возраст (age).
// Добавьте метод greet, который будет выводить приветствие с именем и возрастом человека.
// Создайте экземпляр класса и вызовите метод greet.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = +age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old!`);
    }
}

const john = new Person('John', 34);
john.greet();

// Задание 2: Наследование классов
// Описание задания:
// Создайте класс Student, который будет наследовать от класса Person.
// Добавьте свойство major (основной предмет) и метод study, который будет выводить сообщение о том, что студент учится.
// Создайте экземпляр класса Student и вызовите методы greet и study.

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    study() {
        console.log(`Student ${this.name} study ${this.major}!`);
    }
}

const alice = new Student('Alice Johnson', 20, 'Physics');
alice.greet();
alice.study();

// Задание 3: Использование статических методов
// Описание задания:
// Создайте класс MathOperations, содержащий статический метод add, который принимает два числа и возвращает их сумму.
// Вызовите этот метод без создания экземпляра класса.

class MathOperations {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathOperations.add(5, 7));

// Задание 4: Приватные поля и методы
// Описание задания:
// Создайте класс BankAccount, который содержит приватное поле balance и метод deposit для пополнения счета.
// Добавьте метод getBalance, который возвращает текущий баланс.
// Проверьте доступ к приватному полю из внешнего кода.

class BankAccount {
    #balance = 1000;

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const myAccount = new BankAccount();
myAccount.deposit(100);
console.log(myAccount.getBalance());

// Задание 5: Геттеры и сеттеры
// Описание задания:
// Создайте класс Rectangle, который содержит свойства ширины (width) и высоты (height).
// Реализуйте геттер для вычисления площади (area) и сеттер для изменения ширины с проверкой на положительное значение.

class Rectangle {
    #width;
    #height;

    constructor(width, height) {
        this.#width = width;
        this.#height = height;
    }

    get area() {
        return this.#width * this.#height;
    }

    set width(width) {
        if (width > 0) {
            this.#width = width;
        } else {
            console.error("Width must be positive!");
        }
    }

    get width() {
        return this.#width;
    }
}

const rectangle = new Rectangle(10, 20);
console.log(rectangle.area);
rectangle.width = -5;
console.log(rectangle.width);

// Задание 6: Использование call, apply и bind
// Описание задания:
// Напишите функцию printDetails, которая принимает два аргумента: name и age.
// Эта функция должна выводить в консоль строку вида: "Name: <name>, Age: <age>".
// Затем создайте объект person с двумя свойствами: name и age.
// Используя методы call, apply и bind, вызовите функцию printDetails, передав в нее данные из объекта person.
// Вызовите printDetails с использованием метода call.
// Вызовите printDetails с использованием метода apply.
// Создайте новую функцию с помощью bind, которая привязывает контекст к объекту person, и вызовите эту новую функцию.

function printDetails(name, age) {
    console.log(`Name: ${name}, Age: ${age}`);
}

const person = {
    name: 'Andreas',
    age: 36
};

printDetails.call(person, person.name, person.age);
printDetails.apply(person, [person.name, person.age]);
const bounded = printDetails.bind(person);
bounded();