function createButtonDel() {
    const buttonDel = document.createElement('button');
    buttonDel.append('X');
    buttonDel.style.color = 'red';
    buttonDel.style.marginLeft = '5px';
    buttonDel.addEventListener('click', ({target}) => {
        target.parentElement.remove();
    });
    return buttonDel;
}
