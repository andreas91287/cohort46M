getPost.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId.value}`)
    .then(response => {
        if (response.ok) {
            // console.log(response.status);
            // console.log(response.headers.get('Content-Type'));
            return response.json();
        } else {
            throw new Error(postId.value);
        }

    })
    .then(data => {
        const h2 = document.createElement('h2');
        h2.append(`Post ID: ${data.id}, Title: ${data.title}`);
        document.body.append(h2);
    })
    .catch(e => {
        const h2 = document.createElement('h2');
        h2.append(`Post with ID: ${e.message}, doesn't exist.}`);
        document.body.append(h2);
    });
}

