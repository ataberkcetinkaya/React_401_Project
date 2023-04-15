import axios from 'axios'

export const getAllProducts = async ({ pageParam=0 }) => {
    const { data } = await axios.get(`http://localhost:4000/product?page=${pageParam}`)
    return data
}

export const getProductById = async (product_id) => {
    const { data } = await axios.get('http://localhost:4000/product/' + product_id)
    return data
}