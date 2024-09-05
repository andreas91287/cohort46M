register.onclick = () => {
    const user = {
        'firstName': firstName.value.trim(),
        'lastName': lastName.value.trim(),
        'login': login.value.trim(),
        'password': password.value
    };

    // fetch - bringen, holen
    fetch(`${base_url}/account/user`, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(e => console.log());
}