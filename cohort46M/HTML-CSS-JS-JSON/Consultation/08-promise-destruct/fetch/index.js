function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (response.status !== 200) {
            throw new Error('Error');
        }
        return response.json();
    })
    .then(json => {
        const result = document.getElementById('content');
        result.innerHTML = '';
        const userList = document.createElement('ul');
        json.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        result.appendChild(userList);
    })
    .catch(error => {
        console.log(error);
    })
}

document.getElementById('updateButton').addEventListener('click', fetchData);