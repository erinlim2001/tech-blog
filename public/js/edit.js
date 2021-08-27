const editPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#post-title").value.trim();
    const body = document.querySelector("#post-body").value.trim();

    if(title && body && id) {
        const response = await fetch(`/api/post/{$postId}`, {
            method: 'PUT',
            body: JSON.stringify({title, body}),
            headers: { 'Content-Type': 'application/json'},
        })

        if(response.ok){
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create.');
        }
    }
}

document.querySelector('.edit-form').addEventListener('submit', editPostHandler);
