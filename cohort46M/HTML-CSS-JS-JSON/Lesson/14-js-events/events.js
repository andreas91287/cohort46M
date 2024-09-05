const button = document.getElementById('button');
// const name1 = document.getElementById('name1');
// const name2 = document.getElementById('name2');
// const name3 = document.getElementById('name3');
const nameBox = document.getElementById('nameBox');
const names = nameBox.children;

// button.onclick = show;
// button.onclick = e => console.log(e.timeStamp);

button.addEventListener('click', show);
button.addEventListener('click', e => console.log(e.timeStamp));
// name1.onkeyup = valueToUpperCase;
// name2.onkeyup = valueToUpperCase;
// name3.onkeyup = valueToUpperCase;
nameBox.onkeyup = valueToUpperCase;

function valueToUpperCase(event) {
    // console.log(event.target);
    event.target.value = event.target.value.toUpperCase();
}
