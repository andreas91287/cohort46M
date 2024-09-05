const tick = setInterval(() => {
    console.log('tick');
}, 4000);

const interval = setInterval(() => {
    console.log('interval');
}, 1000);

setTimeout(() => {
    clearInterval(tick);
    clearInterval(interval);
}, 6000);
