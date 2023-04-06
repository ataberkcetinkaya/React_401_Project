import axios from 'axios'

export const getAllProducts = async () => {
    const { data } = await axios.get('http://localhost:4000/product/')
    return data
}