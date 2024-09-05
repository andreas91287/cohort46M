function show(e) {
    // console.log(e.timeStamp);
    for (let i = 0; i < names.length; i++) {
        if (names[i].firstElementChild.value.trim()) {
            const p = document.createElement('p');
            p.appendChild(document.createTextNode(names[i].firstElementChild.value));
            document.body.appendChild(p);
            names[i].firstElementChild.value = '';
        }
    }
}
