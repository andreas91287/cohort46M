// Closure - Kurzschluss
let nickName = 'John';

function greeting(name) {
    // let nickName = 'Peter';
    return function () {
        // let nickName = 'Hans';
        console.log(nickName); 
    }
}

nickName = 'Rabindranate';
const hello = greeting();
hello();
