// 1. Задание: Добавление элементов в массив с помощью push()
// Описание: Создайте массив из нескольких чисел. Используйте метод push(), чтобы добавить два новых числа в конец массива.
let numbers = [1, 2, 3];
numbers.push(4, 5);
console.log(numbers);

// 2. Задание: Удаление элемента с конца массива с помощью pop()
// Описание: Создайте массив и удалите последний элемент с помощью метода pop().
let fruits = ['apple', 'banana', 'cherry'];
fruits.pop();
console.log(fruits);

// 3. Задание: Удаление первого элемента массива с помощью shift()
let animals = ['dog', 'cat', 'elephant'];
animals.shift();
console.log(animals);

// 4. Задание: Добавление элементов в начало массива с помощью unshift()
// Описание: Создайте массив и добавьте несколько элементов в его начало с помощью метода unshift().
let colors = ['red', 'green'];
colors.unshift('black', 'blue');
console.log(colors);

// 5. Задание: Удаление и добавление элементов с помощью splice()
// Описание: Создайте массив и используйте splice() для удаления одного элемента и добавления двух новых на его место.
let numbers5 = [1, 2, 3, 4, 5];
numbers5.splice(2, 1, 7, 8);
console.log(numbers5);

// 6. Задание: Копирование части массива с помощью slice()
// Описание: Создайте массив и скопируйте часть элементов с помощью slice().
let numbers6 = [10, 20, 30, 40, 50];
console.log(numbers6.slice(1, 4));

// 7. Задание: Объединение массивов с помощью concat()
// Описание: Создайте два массива и объедините их с помощью concat().
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
console.log(array1.concat(array2));

// 8. Задание: Поиск элемента с помощью indexOf()
// Описание: Найдите индекс элемента в массиве с помощью indexOf().
let fruits1 = ['apple', 'banana', 'cherry'];
console.log(fruits1.indexOf('cherry'));
console.log(fruits1.indexOf('orange'));

// 9. Задание: Проверка наличия элемента в массиве с помощью includes()
// Описание: Проверьте, содержит ли массив определённый элемент с помощью includes().
let colors1 = ['red', 'green', 'blue'];
console.log(colors1.includes('black'));
console.log(colors1.includes('red'));

// 10. Задание: Поиск элемента с помощью find()
// Описание: Найдите элемент в массиве, используя функцию поиска с методом find(). Ищем пользователя с id 2
let users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Jack' }
];
let index = users.find(u => u.id === 2);
console.log(index);

// 11. Задание: Перебор массива с помощью forEach()
// Описание: Переберите все элементы массива и выведите их в консоль с помощью forEach().
let numbers1 = [1, 2, 3];
numbers1.forEach(n => console.log(n));

// 12. Задание: Преобразование массива с помощью map()
// Описание: Преобразуйте каждый элемент массива, умножив его на 2, с помощью map().
let numbers2 = [1, 2, 3];
numbers2 = numbers2.map(n => n * 2);
console.log(numbers2);

// 13. Задание: Сортировка массива с помощью sort()
// Описание: Отсортируйте массив чисел по возрастанию с помощью sort().
let numbers3 = [5, 2, 8, 3];
numbers3 = numbers3.sort();
console.log(numbers3); // (n1, n2) => n1 - n2

// 14. Задание: Преобразование строки в массив с помощью split() и обратно с помощью join()
// Описание: Преобразуйте строку в массив, разделив её по пробелам, а затем объедините обратно в строку.
let sentence = "Hello world from JavaScript";
console.log(sentence);
const splited = sentence.split(' ');
console.log(splited);
const joined = splited.join(' ');
console.log(joined);

// 15. Задание: Суммирование элементов массива с помощью reduce()
// Описание: Найдите сумму всех чисел в массиве с помощью reduce().
let numbers4 = [1, 2, 3, 4, 5];
const sum = numbers4.reduce((accum, n) => accum + n, 0);;
console.log(sum);
