import sendRequest from './send-request';

const BASE_URL = '/api/post';

export function getAll() {
    // Get all posts
    console.log('Running Post-API get all')
    return sendRequest(BASE_URL);
}

export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}