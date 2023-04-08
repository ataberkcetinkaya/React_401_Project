import axios from 'axios'

export const getAllProducts = async () => {
    const { data } = await axios.get('http://localhost:4000/product/')
    return data
}

export const getProductById = async (product_id) => {
    const { data } = await axios.get('http://localhost:4000/product/' + product_id)
    return data
}