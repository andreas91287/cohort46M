const arr = [1, 2, 3, 'four', 'five'];
console.log('=== push ===');
let res = arr.push(42, 81, 99);
console.log(arr);
console.log(res);

console.log('=== pop ===');
res = arr.pop();
console.log(arr);
console.log(res);

console.log('=== shift ===');
res = arr.shift();
console.log(arr);
console.log(res);

console.log('=== unshift ===');
res = arr.unshift(-20, -10);
console.log(arr);
console.log(res);

console.log('=== concat ===');
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const arr3 = arr1.concat(arr2);
console.log(arr3);
console.log(arr1);
console.log(arr2);

console.log('=== slice ===');
res = arr.slice(2, 6);
console.log(res);
console.log(arr);

console.log('=== splice ===');
// res = arr.splice(1, 2);
// res = arr.splice(1, 2, -100, -200, -300);
// res = arr.splice(0, 1); // == arr.shift();
// res = arr.splice(0, 0, -100, -200); // == arr.unshift(-100, -200);
// res = arr.splice(arr.length - 1, 1); // arr.pop();
res = arr.splice(arr.length, 0, 100500); // arr.push();
console.log(arr);
console.log(res);



