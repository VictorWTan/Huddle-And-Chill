import sendRequest from './send-request';

const BASE_URL = '/api/posts';

export function getAll() {
    // Get all posts
    console.log('Running Post-API get all')
    return sendRequest(`${BASE_URL}`);
}

export function getPostReplies(id) {
    console.log('Getting all replies from post')
    return sendRequest(`${BASE_URL}/reply/${id}`)
}

export function getOnePost(id){
    console.log('Getting one post')
    return sendRequest(`${BASE_URL}/${id}`)
}

export function updatePost(id, content) {
    console.log('Running posts-api update post')
    const data = {
        _id: id,
        content: content
    }
    console.log(data)
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', data)
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

export function addToReplies(id, name, content) {
    console.log('Adding replies from posts-api')
    const data = {
        id: id,
        name: name,
        content: content
    }
    console.log(data)
    return sendRequest(`${BASE_URL}/reply/${id}`)
}

export function deletePost(id){
    console.log('Removing Post')
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}