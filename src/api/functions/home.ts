import apiClient from "../apiClient";

export const getContent = async () => {
    return apiClient.get('/one.json');
};

export const getRecords = async () => {
    return apiClient.get("/two.json");
};