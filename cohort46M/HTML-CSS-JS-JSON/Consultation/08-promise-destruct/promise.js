function getSeven() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(7);
        }, 4000);
    })
}

const promise = getSeven();
console.log(promise);

promise.then((data) => {
    console.log(data);
});

function getSeven() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            reject(new Error('Fehler'));
        }, 4000);
    })
}

const promise2 = getSeven();
promise.then((data) => {
    console.log(data);
})
.catch(e => {
    console.log(e);  
});
