import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';

const apiClient: AxiosInstance = axios.create({
    baseURL: "/api",
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.status === 200) {
            return response;
        } else {
            const msg = response.data?.msg || 'Unknown error';
            alert(msg);
            return Promise.reject(msg);
        }
    },
    (error: AxiosError) => {
        alert(error.message);
        return Promise.reject(error);
    }
);

export default apiClient;