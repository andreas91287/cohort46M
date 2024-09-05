
while (text = prompt('Please type your text.')) {
    console.log(text);
    const content = document.createTextNode(text);
    const list = document.createElement('li');
    list.appendChild(content);
    document.body.appendChild(list);
}
