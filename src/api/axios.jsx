import axios from "axios";

const basicURL = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default basicURL;