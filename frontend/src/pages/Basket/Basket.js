import React from 'react'
import { useBasket } from '../../contexts/BasketContext';
import { Alert, Box, Button, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Basket() {

    const { items, removeFromBasket } = useBasket();

    const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <Box p="5">
        {items.length < 1 && <Alert status="warning">You have no any items here.</Alert>}

        {items.length > 0 && 
        <>
            <ul>
                {items.map((item) => (
                    <li key={item._id} style={{ marginBottom: '20px' }}>
                        <Link to={`/product/${item._id}`}>
                            <Text fontSize="18">Title: {item.title} / Price: {item.price}$</Text>
                            <Image htmlWidth={200} src={item.photos[0]} alt={item.title} />
                        </Link>
                        <Button mt="2" size="sm" colorScheme="red" onClick={() => removeFromBasket(item._id)}>Remove</Button>
                    </li>
                ))}    
            </ul>
            
            <Box mt='10'>
                <Text fontSize="22">
                    Total: {total}$
                </Text>
            </Box>
        </>
        }
    </Box>
  )
}
