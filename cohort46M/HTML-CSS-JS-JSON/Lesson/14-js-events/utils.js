function createButtonDel() {
    const buttonDel = document.createElement('button');
    buttonDel.append('X');
    // buttonDel.classList.add('del');
    buttonDel.style.color = 'red';
    buttonDel.style.marginLeft = '5px';
    buttonDel.onclick = event => {
        event.target.parentElement.remove();
    }
    return buttonDel;
}