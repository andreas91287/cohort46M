const bycicle =  {
    brand: 'Tourist',
    price: 3000,
    bell() {
        console.log('Beeb');
    }
}

// bycicle.bell();

const mountainBike = {
    __proto__: bycicle,
    gears: 7,
    price: 5000
}

console.log(mountainBike.price);
console.log(mountainBike.gears);
console.log(mountainBike.brand);
mountainBike.bell();


