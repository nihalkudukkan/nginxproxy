import axios from "axios"

const url = process.env.REACT_APP_BACKEND2_URL

export function back2msg() {
    return axios.get(`${url}`)
}

export function getAllAliens() {
    return axios.get(`${url}/aliens`)
}