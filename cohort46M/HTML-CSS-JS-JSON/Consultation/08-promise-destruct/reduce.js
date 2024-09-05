const brothers = [
    {race: "hobbit", height: 110, age: 45, name: "Frodo Baggins"},
    {race: "human", height: 185, age: 46, name: "Aragorn"},
    {race: "elf", height: 189, age: 110, name: "Legolas"},
    {race: "dworf", height: 140, age: 150, name: "Gimly"},
    {race: "human", height: 195, age: 200, name: "Gandalf"}
];

const ages = brothers.map((brother) => brother.age);
console.log(ages);

const sum = ages.reduce((accum, age) => accum + age, 0);
console.log(sum);
