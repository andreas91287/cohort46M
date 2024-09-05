buttonAdd.onclick = function() {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(text.value.trim()));
    root.appendChild(li);
    text.value = '';
}