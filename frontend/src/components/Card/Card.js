import React from 'react'
import { Box, Image, Button } from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { useBasket } from '../../contexts/BasketContext';

export default function Card({product}) {

    const {addToBasket, items} = useBasket();

    const findBasketItem = items.find((basket_item) => basket_item._id === product._id);

  return (
    <div className={styles.theMargin}>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Link to={`/product/${product._id}`}>
                <Image src={product.photos[0]} alt='product' loading="lazy" />

                <Box p='6'>
                    <Box d='flex' alignItems='baseline'>
                        Title: {product.title}
                    </Box>
                    <Box mt="1" fontWeight="semibold" fontSize='xl'>
                        {product.description}
                    </Box>
                    <Box mt="1" fontWeight="semibold" fontSize='xl'>
                        Price: {product.price}$
                    </Box>
                </Box>
            </Link>
            <Button colorScheme={findBasketItem ? 'green' : 'blue'} onClick={() => addToBasket(product, findBasketItem)}>
                {findBasketItem ? 'Remove from cart' : 'Add to cart'}
            </Button>
        </Box>
    </div>
  )
}
