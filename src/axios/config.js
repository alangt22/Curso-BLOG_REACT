import axios from "axios";

const blogFetch = axios.create({
    baseURL: "http://jsonplaceholder.typicode.com/",
    headers: {
        "Content-Type": "application/json",
    }
})

export default blogFetch