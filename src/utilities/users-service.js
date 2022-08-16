import * as usersAPI from './users-api'
import jwt_decode from 'jwt-decode'

export async function signUp(userData){
    const token = await usersAPI.signUp(userData)
    localStorage.setItem('token', token)

    return getUser()
}

export async function login(credentials){
    const token = await usersAPI.login(credentials)
    localStorage.setItem('token', token)
    return getUser()
}

export function getToken(){
    const token = localStorage.getItem('token')
    if (!token) return null
    const payload = jwt_decode(token)
    if (payload.exp < Date.now() / 1000){
        localStorage.removeItem('token')
        return null
    }
    return token
}

export function getUser(){
    const token = getToken()
    return token ? jwt_decode(token) : null;
}

export function logOut(){
    localStorage.removeItem('token')
}

export async function checkToken(){
    return usersAPI.checkToken()
    .then(dateStr => new Date(dateStr))
}