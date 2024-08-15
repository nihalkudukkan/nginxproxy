import axios from "axios"

const url = process.env.REACT_APP_BACKEND1_URL

export function back1msg() {
    return axios.get(`${url}`)
}

export function addAlien(alien) {
    return axios.post(`${url}/alien`, alien)
}