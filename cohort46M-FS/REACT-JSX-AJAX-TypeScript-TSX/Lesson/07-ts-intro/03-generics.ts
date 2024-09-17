const arr1 = [2, 3, 5, 7]
const arr2 = ['one', 'two', 'three']
const arr3 = [true, 2, 3, 'five']

// function reverseArray(arr) {
//     return [...arr].reverse();
// }

// function reverseArrayNumber(arr: number) {
//     return [...arr].reverse();
// }

// function reverseArrayString(arr: string) {
//     return [...arr].reverse();
// }

// console.log(reverseArrayNumber(arr1));
// console.log(arr1);
// console.log(reverseArrayString(arr2));
// console.log(arr2);
// console.log(reverseArray(arr3));
// console.log(arr3);
// console.log(reverseArray(42));


function reverseArray<T>(arr: T[]) {
    return [...arr].reverse();
}

console.log(reverseArray<number>(arr1));
console.log(arr1);
console.log(reverseArray<string>(arr2));
console.log(arr2);
console.log(reverseArray<number|string|boolean>(arr3));
console.log(arr3);
// console.log(reverseArray(42));


