import axios from 'axios';


// const instance = axios.create({
//     httpsAgent: new https.Agent({ rejectUnauthorized: false }) // Ignore SSL certificate validation
// });


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
        ]
    };
    // return axios.get(`${API_URL}/getAllUsers`);
};


export const getPosts = async () => {
    // let response = () => {
    //     return new Promise(function(resolve, reject) {
    //       fetch(`${API_URL}/posts`, {
    //         params: {
    //           postId: "1",
    //         }
    //       }).then(response => {
    //         resolve(response);
    //       });
    //     });
    //   };
    //   return response;
    // return await instance.get(`${API_URL}/posts/1`);

    const apiUrl = 'http://localhost:8080/posts/1';

    axios.get(apiUrl)
        .then((response) => {
            console.log('API Response:', response.data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    // return axios.get(`http://localhost:8080/swagger-ui/index.html#/post-controller/createPost/1`);
}

