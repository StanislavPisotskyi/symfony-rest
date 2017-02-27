export function fetchGetPosts(posts)
{
    return fetch('http://localhost:8000/posts', {
        method: 'GET',
        mode: 'CORS'
    }).then(res => res.json())
        .catch(err => err);
}

export function fetchGetPost(id)
{
    return fetch('http://localhost:8000/posts/' + id, {
        method: 'GET',
        mode: 'CORS'
    }).then(res => res.json())
        .catch(err => err);
}

export function fetchCreatePost(data)
{
    return fetch('http://localhost:8000/posts', {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}

export function fetchUpdatePost(id, data)
{
    return fetch('http://localhost:8000/posts/' + id, {
        method: 'PUT',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}

export function fetchDeletePost(id)
{
    return fetch('http://localhost:8000/posts/' + id, {
        method: 'DELETE',
        mode: 'CORS'
    }).then(res => {
        return res;
    }).catch(err => err);
}