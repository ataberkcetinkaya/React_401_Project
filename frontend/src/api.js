import axios from 'axios'

export const getAllProducts = async ({ pageParam=0 }) => {
    const { data } = await axios.get(`http://localhost:4000/product?page=${pageParam}`)
    return data
}

export const getProductById = async (product_id) => {
    const { data } = await axios.get('http://localhost:4000/product/' + product_id)
    return data
}

export const fetchRegister = async (values) => {
    const { data } = await axios.post('http://localhost:4000/auth/register', values)
    return data
}


axios.interceptors.request.use(
    function (config) {
        const { origin } = new URL(config.url);
        const allowedOrigins = ['http://localhost:4000'];
        const token = localStorage.getItem('access-token');
        if (allowedOrigins.includes(origin)) {
            config.headers.authorization = token;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export const fetchMe = async (token) => {
    const { data } = await axios.get('http://localhost:4000/auth/me')
    return data
}

export const fetchLogout = async () => {
    const { data } = await axios.post('http://localhost:4000/auth/logout', { refresh_token: localStorage.getItem('refresh-token') })
    return data
}

export const fetchLogin = async (input) => {
    const { data } = await axios.post('http://localhost:4000/auth/login', input)
    return data
}