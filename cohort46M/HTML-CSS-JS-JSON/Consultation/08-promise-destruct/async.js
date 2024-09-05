console.log('apple')

setTimeout(() => {
    console.log('banana1');
}, 5000);
console.log('banana2');

function getSix() {
    setTimeout(() => {
        return 6;
    }, 4000);
}
let x = getSix();
console.log(x);
