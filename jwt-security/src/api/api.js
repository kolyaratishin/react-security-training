import axios from "axios";

const authAxiosInstance = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8085/jwt/",
});

export const authApi = {
    login(username, password) {
        return authAxiosInstance.post(`token`,
            {
                username,
                password
            }
        );
    },
    register(username, password) {
        return authAxiosInstance.post(`registration`, {
            username,
            password
        });
    },
}