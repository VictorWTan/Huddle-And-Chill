import sendRequest from './send-request';

const BASE_URL = '/api/posts';

export function getAll() {
    // Get all posts
    console.log('Running Post-API get all')
    return sendRequest(BASE_URL);
}

export function updatePost(id, post) {
    console.log('Running posts-api update post')
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', post)
}

export function addToPosts(name, content) {
    console.log('Adding posts from posts-api')
    const data = {
        name: name,
        content: content
    }
    console.log(data)
    return sendRequest(`${BASE_URL}/create`, `POST`, data)
}

export function deletePost(id){
    console.log('Removing Post')
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}