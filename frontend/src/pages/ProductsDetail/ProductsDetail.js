import React from 'react'
import { useQuery } from 'react-query'
import { useParams, useNavigate } from 'react-router-dom'
import { getProductById } from '../../api';
import { Box, Heading, Text, Button } from '@chakra-ui/react'
import ImageGallery from 'react-image-gallery';

export default function ProductsDetail() {

  const { product_id } = useParams();

  const { isLoading, error, data } = useQuery(['product', product_id], () => getProductById(product_id));

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/products');
  }

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  const dateString = new Date(data.createdAt).toLocaleString(); //toLocaleString() gives with hours, minutes, seconds, toLocaleDateString() gives only date

  const images = data.photos.map((photo) => {
    return {
      original: photo,
      thumbnail: photo,
    }
  });

  return (
    <>
      <div style={{ marginTop: '2vh', marginBottom: '2vh', textAlign: 'center' }}>
        <Button colorScheme='red' onClick={handleClick}>Back</Button>
        <Box>
          <Heading>{data.description}</Heading>
          <Text>{data.title}</Text>
          <Text>{data.price}</Text>
          <Text>{dateString}</Text>
        </Box>
      </div><ImageGallery items={images} />
    </>
  )
}
