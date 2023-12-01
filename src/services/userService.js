import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Replace with your actual backend URL

export const createUser = async (userData) => {
    return {
            id: 1,
            username: 'test',
            email: 'test@gmail.com'
    };
// }

    // return [
    //     {
    //         id: 1,
    //         username: 'test',
    //         email: ''
    //     },
    //     {
    //         id: 2,
    //         username: 'test',
    //         email: ''
    //     },
    // ];
    // return axios.post(`${API_URL}/createUser`, userData);
};

export const getUser = async (id) => {
    return {
            id: 1,
            username: 'test',
            email: ''
        };
    //return axios.get(`${API_URL}/getUser/${id}`);
};

export const updateUser = async (id, userData) => {
    return {
            id: 1,
            username: 'test',
            email: ''
        };
   // return axios.put(`${API_URL}/updateUser/${id}`, userData);
};

export const deleteUser = async (id) => {
    return {
            id: 1,
            username: 'test',
            email: ''
        };
    //return axios.delete(`${API_URL}/deleteUser/${id}`);
};

export const getAllUsers = async () => {
    return {
        data: [
        {
            id: 1,
            username: 'test1',
            email: 'test1@gmail.com'
        },
        {
            id: 2,
            username: 'test2',
            email: 'test2@gmail.com'
        },
    ]};
    // return axios.get(`${API_URL}/getAllUsers`);
};

