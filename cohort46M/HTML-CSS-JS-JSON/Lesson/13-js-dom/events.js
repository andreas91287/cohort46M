const button = document.getElementById('button');
const name1 = document.getElementById('name1');

button.onclick = show;
name1.onkeyup = valueToUpperCase;

function show() {
    // alert(`Hello ${name1.value}!`);
    const p = document.createElement('p');
    p.appendChild(document.createTextNode(name1.value));
    document.body.appendChild(p);
}

function valueToUpperCase() {
    name1.value = name1.value.toUpperCase();
}