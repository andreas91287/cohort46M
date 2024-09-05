const arr = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0]; // arr.length => 10
printArray(arr);
// console.log(arr);

// natural sorting
bubleSort(arr);
printArray(arr);        // expected [0, 1, 1, 2, 2, 2, 4, 5, 9, 9]
// console.log(arr);

// Searching for index
let index = binarySearch(arr, 5);   // index = 7
console.log(`Index = ${index}`);
index = binarySearch(arr, 7);       // index = -9
console.log(`Index = ${index}`);

// reverved natural sorting
bubleSort(arr, (a, b) => b - a);
printArray(arr);
// console.log(arr);


function bubleSort(arr, comparator = (a, b) => a - b) {
    // if (!comparator) {
    //     comparator = (a, b) => a - b;
    // }
    // comparator = comparator ? comparator : ;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if(comparator(arr[j], arr[j + 1]) > 0) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }        
    }
    return arr;
}

function binarySearch(arr, value, comparator = (a, b) => b - a) {
    // if (!comparator) {
    //     comparator = (a, b) => b - a;
    // }
    // comparator = comparator ? comparator : (a, b) => b - a;
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = ((left + right) - (left + right) % 2) / 2;
        // let mid = Math.trunc((left + right) / 2);
        // console.log(mid);
        if (comparator(arr[mid], value) === 0) {
            return mid;
        }
        if (comparator(arr[mid], value) > 0) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -left - 1;
}

function printArray(arr) {
    console.log('===========');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('===========');    
}
