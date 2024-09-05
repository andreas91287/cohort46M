const btn = document.getElementById('magic-btn');
// console.log(btn);
const cloneBtn = btn.cloneNode(true);
cloneBtn.id = "magic-btn-2";

btn.addEventListener('click', () => {
    cloneBtn.textContent = 'Button Changed';
    cloneBtn.style.backgroundColor = '#a78b71';
    cloneBtn.style.color = 'white';
    cloneBtn.classList.add('second-btn');
    document.body.append(cloneBtn);
});

let toogle = true;
cloneBtn.addEventListener('click', () => {
    if (toogle) {
        btn.style.backgroundColor = '#9c4a1a';
        btn.style.color = 'black';
    } else {
        btn.style.backgroundColor = '#f7c815';
        btn.style.color = 'green';
    }
    toogle = !toogle;
});