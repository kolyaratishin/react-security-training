import axios from "axios";

const authAxiosInstance = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8085/jwt",
});

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8082/api/v1/jwt",
    Authorization: "Bearer " + localStorage.getItem("jwt")
});

export const authApi = {
    login(username, password) {
        return authAxiosInstance.post(`/token`,
            {
                username,
                password
            }
        ).then(response => {
            localStorage.setItem("jwt", response.data.token);
            return response;
        });
    },
    register(username, password) {
        return authAxiosInstance.post(`/registration`, {
            username,
            password
        });
    },
}