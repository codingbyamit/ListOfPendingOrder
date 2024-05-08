import axios from "axios";

// const axiosClient = axios.create({
//     baseURL: "http://10.0.0.177:85/",
//     withCredentials: "true",
// });

const axiosClient = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: "true",
});

// const axiosClient = axios.create({
//     baseURL: "http://10.0.0.5:5002",
//     withCredentials: "true",
// });

export default axiosClient;
