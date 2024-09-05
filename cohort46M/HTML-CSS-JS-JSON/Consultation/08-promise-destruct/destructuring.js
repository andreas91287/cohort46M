const brothers = [
    {race: "hobbit", height: 110, age: 45, name: "Frodo Baggins"},
    {race: "human", height: 185, age: 46, name: "Aragorn"},
    {race: "elf", height: 189, age: 110, name: "Legolas"},
    {race: "dworf", height: 140, age: 150, name: "Gimly"},
    {race: "human", height: 195, age: 200, name: "Gandalf"}
];

// Destructuring solution 1
// const frodo = brothers[0];
// console.log(frodo);

const [frodo, aragorn, legolas, gimly, gandalf] = brothers;
console.log(gimly);

const user = {
    id: '1',
    email: 'user@email.com',
    login: 'admin'
}

// const email = user.email;
const {email, id, login} = user;
console.log(id);
