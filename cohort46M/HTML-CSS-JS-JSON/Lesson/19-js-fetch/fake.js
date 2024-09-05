const baseUrl = 'https://jsonplaceholder.typicode.com';
send.onclick = () => {
    fetch(`${baseUrl}/users/?username=${userName.value.trim()}`)
        .then(response => response.json())
        .then(data => data[0].id)
        .then(id => fetch(`${baseUrl}/posts?userId=${id}`))
        .then(response => response.json())
        .then(data => data[0])
        .then(post => {
            const h2 = document.createElement('h2');
            h2.append(`Post of user : ${userName.value.trim()}, Title: ${post.title}`);
            const h3 = document.createElement('h3');
            h3.append(`Body: ${post.body}`);
            document.body.append(h2, h3);
        })
        .catch(e => {
            console.log(e);
            const h1 = document.createElement('h1');
            h1.append('Post not found');
            document.body.append(h1);
        });
}