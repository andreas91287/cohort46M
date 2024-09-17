let isLoading: boolean;
isLoading = true;
// isLoading = 0;
let num = 42;
// num = 'Hello';
let str: string = 'Hello world!';
console.log(str);
// Arrays
const primes1: number[] = [2, 3, 5, 7];
const primes2: Array<number> = [11, 13, 17];
primes2.push(19);
// primes2.push('23');
console.log(primes1);
primes2.forEach(n => console.log(n));
// Tuples
const john: [string, string, number] = ['John', 'Smith', 123456789];
john[1] = 'Doe';
// john[0] = 0;
// john[3] = 'male';
john.push('male');
// john.push(true);
john.push(28);
// john[3] = '1';
console.log(john);

// any
let a: any = 100500;
a = 'Hello';
a = false;

// function
function greeting(name: string): void {
    console.log(`Hello, ${name}`);
}
greeting('Peter');
// greeting(0);

// Type
type Login = string;
let nickName: Login = 'admin';
type ID = string | number;
let id1: ID = 'john@gmail.com';
let id2: ID = 1234;
// let id3: ID = true;
// const arr: (number | string)[] = ['one', 2, 'three'];
const arr: Array<number | string> = ['one', 2, 'three'];

type User = {
    email: string,
    password: string,
    // birthDate?: Date,    // ? - optional field
    [key: string]: number | string | Date
}

const peter: User = {
    email: 'peter@gmail.com',
    password: '1234',
    birthDate: new Date('1999-03-09'),
    hobby: 'chess'
}

const mary: User = {
    email: 'mary@gmail.com',
    password: '4321',
    zip: 1234,
    hobby: 'JS'
}

console.log(peter);
console.log(mary);

type Area = {
    width: number,
    depth: number,
    area: () =>  number
}

type Height = {
    height: number
}

type Wardrobe = Area & Height;

const wardrobe: Wardrobe = {
    width: 10,
    depth: 10,
    height: 20,
    area: function() {
        return this.width * this.depth
    }
}

console.log(wardrobe.area());
