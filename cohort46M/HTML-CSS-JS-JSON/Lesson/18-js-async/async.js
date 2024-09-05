console.log('One');
setTimeout(() => console.log('Two'), 3);
setTimeout(() => {
    console.log('Two 1/2');
    setTimeout(() => console.log('O-o-ops'), 1);
    console.log('Seven');
    },
    1);
// for (let i = 0; i < 100_000_000; i++);
console.log('Three');

