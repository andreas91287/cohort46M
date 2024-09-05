item.onkeyup = event => {
    if (event.key === 'Enter') {
        addToDoItem();
    }
}

addItem.onclick = addToDoItem;

function addToDoItem() {
    const text = item.value.trim();
    if (text) {
        const li = document.createElement('li');
        li.append(text, createButtonDel());
        todoList.append(li);
    }
    item.value = '';
}