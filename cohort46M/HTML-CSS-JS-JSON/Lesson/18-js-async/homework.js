// Problem -> console 10 times 10
// for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);

//     }, 1000);
// }


// Solution 1 -> use let
// for (let i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);

//     }, 1000);
// }

// Not using const, let, ...
// Solution 2
for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i - 10); // or (i % 10)
        i++;
    }, 1000);
}